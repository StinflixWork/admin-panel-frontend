import { Navigate } from 'react-router'
import { AuthByEmail } from '@/features/AuthByEmail'
import { AppRoutes } from '@/shared/constants/routes'
import { useAppSelector } from '@/shared/libs/hooks/useStore.ts'
import styles from './AuthPage.module.scss'

const AuthPage = () => {
	const isAuth = useAppSelector(({ admin }) => admin.isAuth)

	if (isAuth) {
		return <Navigate to={AppRoutes.MAIN} replace />
	}

	return (
		<div className={styles.root}>
			<AuthByEmail />
		</div>
	)
}

export default AuthPage
