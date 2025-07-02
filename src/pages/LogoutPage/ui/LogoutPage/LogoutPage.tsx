import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { addToast } from '@heroui/toast'
import { adminActions, useLogoutMutation } from '@/entities/Admin'
import { AppRoutes } from '@/shared/constants/routes'
import { useAppDispatch } from '@/shared/libs/hooks/useStore.ts'

const LogoutPage = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [logout] = useLogoutMutation()

	useEffect(() => {
		const handleLogout = async () => {
			try {
				await logout().unwrap()
				dispatch(adminActions.logout())
				navigate(AppRoutes.AUTH, { replace: true })
			} catch (error) {
				console.error(error)
			}
		}

		handleLogout()
			.then(() =>
				addToast({
					title: 'Ви успішно вийшли з системи',
					variant: 'solid',
					color: 'success'
				})
			)
			.catch(() =>
				addToast({
					title: 'Сталась не передбачена помилка',
					variant: 'solid',
					color: 'danger'
				})
			)
	}, [])

	return <></>
}

export default LogoutPage
