import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { addToast } from '@heroui/react'
import { adminActions, useLoginMutation } from '@/entities/Admin'
import { AppRoutes } from '@/shared/constants/routes'
import { useAppDispatch } from '@/shared/libs/hooks/useStore.ts'
import { AppButton } from '@/shared/ui/AppButton'
import { PasswordField } from '@/shared/ui/Fields/PasswordField'
import { TextField } from '@/shared/ui/Fields/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthFormFieldsType, validationAuthValues } from '../../config/validationAuthValues.ts'

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
		<div className='shadow-blue-light flex w-[480px] flex-col justify-center gap-y-12 rounded-lg bg-white px-6 py-8'>
			<h1 className='text-gray-dark text-center text-3xl font-semibold'>OneTouch | Admin</h1>
			<form className='flex flex-col gap-y-8' onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-y-6'>
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
