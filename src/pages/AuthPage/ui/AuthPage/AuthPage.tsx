import { Navigate } from 'react-router'
import { AuthByEmail } from '@/features/AuthByEmail'
import { AppRoutes } from '@/shared/constants/routes'
import { useAppSelector } from '@/shared/libs/hooks/useStore.ts'

const AuthPage = () => {
	const isAuth = useAppSelector(({ admin }) => admin.accessToken)

	if (isAuth) {
		return <Navigate to={AppRoutes.MAIN} replace />
	}

	return (
		<div className='grid h-full w-full place-items-center'>
			<AuthByEmail />
		</div>
	)
}

export default AuthPage
