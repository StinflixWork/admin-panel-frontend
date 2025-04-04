import { useNavigate } from 'react-router'
import { adminActions } from '@/entities/Admin'
import { AppRoutes } from '@/shared/constants/routes'
import { useAppDispatch } from '@/shared/libs/hooks/useStore.ts'
import {
	LocalStorageKeys,
	LocalStorageService
} from '@/shared/services/localStorageService.ts'
import { AppButton, ButtonColors, ButtonVariants } from '@/shared/ui/AppButton'
import styles from './Logout.module.scss'

export const Logout = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleLogout = () => {
		dispatch(adminActions.logout())
		LocalStorageService.removeItem(LocalStorageKeys.ACCESS_TOKEN)
		navigate(AppRoutes.AUTH, { replace: true })
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
