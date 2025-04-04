import { PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { adminActions } from '@/entities/Admin/model/adminSlice.ts'
import { AppRoutes } from '@/shared/constants/routes'
import { useAppDispatch } from '@/shared/libs/hooks/useStore.ts'
import {
	LocalStorageKeys,
	LocalStorageService
} from '@/shared/services/localStorageService.ts'

export const AppLoaderProvider = ({ children }: PropsWithChildren) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		const accessToken = LocalStorageService.getItem(
			LocalStorageKeys.ACCESS_TOKEN
		)

		if (accessToken) {
			dispatch(adminActions.setIsAuth(true))
		} else {
			navigate(AppRoutes.AUTH, { replace: true })
		}
	}, [])

	return <>{children}</>
}
