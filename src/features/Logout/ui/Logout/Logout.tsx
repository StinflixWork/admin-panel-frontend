import { useNavigate } from 'react-router'
import { adminActions, useLogoutMutation } from '@/entities/Admin'
import { AppRoutes } from '@/shared/constants/routes'
import { useAppDispatch } from '@/shared/libs/hooks/useStore.ts'
import { LocalStorageKeys, LocalStorageService } from '@/shared/services/localStorageService.ts'
import { AppButton, ButtonColors, ButtonVariants } from '@/shared/ui/AppButton'
import styles from './Logout.module.scss'

export const Logout = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [logout] = useLogoutMutation()

	const handleLogout = async () => {
		try {
			await logout().unwrap()
			dispatch(adminActions.logout())
			LocalStorageService.removeItem(LocalStorageKeys.REMEMBER_ME)
			navigate(AppRoutes.AUTH, { replace: true })
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<AppButton
			className={styles.root}
			variant={ButtonVariants.OUTLINE}
			color={ButtonColors.DANGER}
			onPress={handleLogout}
		>
			Вихід
		</AppButton>
	)
}
