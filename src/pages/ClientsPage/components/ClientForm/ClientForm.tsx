import { useForm } from 'react-hook-form'
import { IClientResource } from '@/entities/Client/api/clientTypes.ts'
import { AppButton, ButtonVariants } from '@/shared/ui/AppButton'
import { AppDropzone } from '@/shared/ui/AppDropzone'
import { PasswordField } from '@/shared/ui/Fields/PasswordField'
import { TextField } from '@/shared/ui/Fields/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import { clientDto } from '../../config/clientDto.ts'
import { ClientFormFieldsType, clientFormSchema } from '../../config/clientFormSchema.ts'
import styles from './ClientForm.module.scss'

interface ClientFormProps {
	initialValues: IClientResource
	onSubmit: (formFields: ClientFormFieldsType) => void
	onCloseModal: () => void
	setFile: (file: File | null) => void
}

export const ClientForm = (props: ClientFormProps) => {
	const { initialValues, onSubmit, onCloseModal, setFile } = props
	const clientData = clientDto(initialValues)

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<ClientFormFieldsType>({
		defaultValues: clientData,
		resolver: yupResolver(clientFormSchema)
	})

	return (
		<form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.fields}>
				<AppDropzone picture={initialValues.picture} setFile={setFile} />
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
					Зберегти
				</AppButton>
			</div>
		</form>
	)
}
