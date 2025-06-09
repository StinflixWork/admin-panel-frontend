import { PropsWithChildren, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router'
import { adminActions, useLogoutMutation, useRefreshMutation } from '@/entities/Admin'
import { AppRoutes } from '@/shared/constants/routes'
import { useAppDispatch, useAppSelector } from '@/shared/libs/hooks/useStore.ts'
import { AppLoader } from '@/shared/ui/AppLoader'

export const RequireAuth = ({ children }: PropsWithChildren) => {
	const { accessToken, isAuthInitialized } = useAppSelector(state => state.admin)
	const dispatch = useAppDispatch()
	const location = useLocation()

	const [refresh, { isLoading }] = useRefreshMutation()
	const [logout] = useLogoutMutation()

	useEffect(() => {
		const tryRefresh = async () => {
			try {
				const { token_type, access_token } = await refresh().unwrap()
				dispatch(adminActions.setAccessToken(`${token_type} ${access_token}`))
			} catch {
				await logout().unwrap()
				dispatch(adminActions.logout())
			} finally {
				dispatch(adminActions.setAuthInitialized(true))
			}
		}

		if (!accessToken) {
			tryRefresh()
		} else {
			dispatch(adminActions.setAuthInitialized(true))
		}
	}, [accessToken])

	if (!isAuthInitialized || isLoading) {
		return <AppLoader />
	}

	if (!accessToken) {
		return <Navigate to={AppRoutes.AUTH} state={{ from: location }} replace />
	}

	return children
}
