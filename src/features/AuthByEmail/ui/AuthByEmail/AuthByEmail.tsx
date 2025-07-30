import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { addToast } from '@heroui/toast'
import { adminActions, useLoginMutation } from '@/entities/Admin'
import { AppRoutes } from '@/shared/constants/routes'
import { useAppDispatch } from '@/shared/libs/hooks/useStore.ts'
import { AppButton } from '@/shared/ui/AppButton'
import { PasswordField } from '@/shared/ui/Fields/PasswordField'
import { TextField } from '@/shared/ui/Fields/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthFormFieldsType, validationAuthValues } from '../../config/validationAuthValues.ts'
import styles from './AuthByEmail.module.scss'

export const AuthByEmail = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<AuthFormFieldsType>({
		resolver: yupResolver(validationAuthValues)
	})

	const [login] = useLoginMutation()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<AuthFormFieldsType> = async authCredentials => {
		try {
			const { email, password } = authCredentials
			const { token_type, access_token } = await login({
				email,
				password
			}).unwrap()

			const accessToken = `${token_type} ${access_token}`
			dispatch(adminActions.setAccessToken(accessToken))

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
					<TextField
						label='Email'
						placeholder='Введіть email'
						error={errors.email?.message}
						isRequired
						{...register('email')}
					/>
					<PasswordField error={errors.password?.message} {...register('password')} isRequired />
				</div>
				<AppButton type='submit'>Увійти</AppButton>
			</form>
		</div>
	)
}
