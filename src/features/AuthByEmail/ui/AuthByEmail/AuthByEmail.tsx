import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Checkbox } from '@heroui/checkbox'
import { Input } from '@heroui/input'
import { addToast } from '@heroui/toast'
import { adminActions, useLoginMutation } from '@/entities/Admin'
import { REMEMBER_ME } from '@/shared/constants/common.ts'
import { AppRoutes } from '@/shared/constants/routes'
import { useAppDispatch } from '@/shared/libs/hooks/useStore.ts'
import { AppButton } from '@/shared/ui/AppButton'
import { PasswordField } from '@/shared/ui/Fields/PasswordField'
import { yupResolver } from '@hookform/resolvers/yup'
import Cookies from 'js-cookie'
import { defaultAuthValues } from '../../config/defaultAuthValues.ts'
import { validationAuthValues } from '../../config/validationAuthValues.ts'
import { IAuthFormValues } from '../../types/authFormValues.ts'
import styles from './AuthByEmail.module.scss'

// Додати вивід помилок під інпути
// Винести інпути в шерід
export const AuthByEmail = () => {
	const { register, handleSubmit } = useForm<IAuthFormValues>({
		defaultValues: defaultAuthValues,
		resolver: yupResolver(validationAuthValues)
	})

	const [login] = useLoginMutation()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<IAuthFormValues> = async authCredentials => {
		try {
			const { email, password, rememberMe } = authCredentials
			const { token_type, access_token } = await login({
				email,
				password
			}).unwrap()

			const accessToken = `${token_type} ${access_token}`
			dispatch(adminActions.setAccessToken(accessToken))

			if (rememberMe) {
				Cookies.set(REMEMBER_ME, JSON.stringify(rememberMe), { expires: 30 })
			} else {
				Cookies.set(REMEMBER_ME, JSON.stringify(rememberMe))
			}

			navigate(AppRoutes.MAIN, { replace: true })
		} catch (e) {
			console.error(e)
			addToast({
				title: 'Перевірьте будь-ласка правильність вхідних даних',
				variant: 'solid',
				color: 'danger'
			})
		}
	}

	return (
		<div className={styles.root}>
			<h1 className={styles.headline}>OneTouch | Admin</h1>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.wrapperFields}>
					<Input
						label='Email'
						placeholder='Введіть email'
						labelPlacement='outside'
						radius='sm'
						isRequired
						{...register('email')}
					/>
					<PasswordField isRequired {...register('password')} />
					<Checkbox {...register('rememberMe')}>Запам'ятати мене</Checkbox>
				</div>
				<AppButton type='submit'>Увійти</AppButton>
			</form>
		</div>
	)
}
