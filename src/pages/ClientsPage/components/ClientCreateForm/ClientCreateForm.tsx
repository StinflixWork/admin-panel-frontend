import { useForm } from 'react-hook-form'
import { Checkbox } from '@heroui/checkbox'
import {
	ClientCreateFormFieldsType,
	clientCreateFormSchema
} from '@/pages/ClientsPage/config/clientFormSchema.ts'
import { AppButton, ButtonVariants } from '@/shared/ui/AppButton'
import { AppDropzone } from '@/shared/ui/AppDropzone'
import { PasswordField } from '@/shared/ui/Fields/PasswordField'
import { TextField } from '@/shared/ui/Fields/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import styles from './ClientCreateForm.module.scss'

interface ClientCreateFormProps {
	onSubmit: (formFields: ClientCreateFormFieldsType) => void
	onCloseModal: () => void
	setFiles: (files: File[]) => void
}

export const ClientCreateForm = (props: ClientCreateFormProps) => {
	const { setFiles, onSubmit, onCloseModal } = props

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<ClientCreateFormFieldsType>({
		defaultValues: { active: true },
		resolver: yupResolver(clientCreateFormSchema)
	})

	return (
		<form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.fields}>
				<AppDropzone setFileList={setFiles}>
					<div className='text-sm text-center px-5 py-10'>
						<p>Натисніть щоб завантажити</p>
						<p>або перетягніть</p>
						<p>JPG, PNG до 5 мб</p>
					</div>
				</AppDropzone>
				<TextField
					label='Назва CRM системи'
					placeholder='Введіть назву системи'
					error={errors.client_name?.message}
					{...register('client_name')}
				/>
				<TextField
					label='Ідентифікатор'
					placeholder='Введіть ідентифікатор клієнта'
					{...register('client_identifier')}
					error={errors.client_identifier?.message}
				/>
				<TextField
					label='Username'
					placeholder='Введіть назву системи'
					autoComplete='new-username'
					error={errors.username?.message}
					{...register('username')}
				/>
				<PasswordField error={errors.password?.message} {...register('password')} />
				<TextField
					label='СУБД'
					placeholder='Введіть субд'
					error={errors.connection?.message}
					{...register('connection')}
				/>
				<TextField
					label='База даних'
					placeholder='Введіть назву БД'
					error={errors.database?.message}
					{...register('database')}
				/>
				<TextField
					label='Домен'
					placeholder='Введіть посилання'
					error={errors.domain?.message}
					{...register('domain')}
				/>
				<TextField
					label='Хост'
					placeholder='Введіть хост'
					error={errors.host?.message}
					{...register('host')}
				/>
				<TextField
					label='Порт'
					placeholder='Введіть порт'
					error={errors.port?.message}
					{...register('port')}
				/>
				<Checkbox {...register('active')}>Активний</Checkbox>
			</div>
			<div className={styles.actions}>
				<AppButton
					onPress={onCloseModal}
					variant={ButtonVariants.OUTLINE}
					color='danger'
					type='button'
					fullWidth
				>
					Скасувати
				</AppButton>
				<AppButton type='submit' fullWidth>
					Створити
				</AppButton>
			</div>
		</form>
	)
}
