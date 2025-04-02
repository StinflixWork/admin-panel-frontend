import { SubmitHandler, useForm } from 'react-hook-form'
import { adminActions, useGetSessionMutation } from '@/entities/Admin'
import { useAppDispatch } from '@/shared/libs/hooks/useStore.ts'
import { LocalStorageService } from '@/shared/services/localStorageService.ts'
import { PasswordField } from '@/shared/ui/Fields'
import { Button } from '@heroui/button'
import { Checkbox } from '@heroui/checkbox'
import { Input } from '@heroui/input'
import { yupResolver } from '@hookform/resolvers/yup'
import { defaultAuthValues } from '../../config/defaultAuthValues.ts'
import { validationAuthValues } from '../../config/validationAuthValues.ts'
import { IAuthFormValues } from '../../types/authFormValues.ts'
import styles from './AuthByEmail.module.scss'

export const AuthByEmail = () => {
	const { register, handleSubmit } = useForm<IAuthFormValues>({
		defaultValues: defaultAuthValues,
		resolver: yupResolver(validationAuthValues)
	})

	const [getSession] = useGetSessionMutation()
	const dispatch = useAppDispatch()

	const onSubmit: SubmitHandler<IAuthFormValues> = async data => {
		try {
			const response = await getSession({
				email: data.email,
				password: data.password
			}).unwrap()

			if (response) {
				const accessToken = `${response.token_type} ${response.access_token}`
				LocalStorageService.setItem('access_token', accessToken)
				dispatch(adminActions.setIsAuth(true))
			}
		} catch (e) {
			console.error('@authByEmail', e)
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
					<PasswordField<IAuthFormValues>
						label='password'
						register={register}
					/>
					<Checkbox {...register('rememberMe')}>Запам'ятати мене</Checkbox>
				</div>
				<Button color='primary' radius='sm' type='submit'>
					Увійти
				</Button>
			</form>
		</div>
	)
}
