import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useUpdateClientByIdMutation } from '@/entities/Client'
import { IClientResource } from '@/entities/Client/api/clientTypes.ts'
import { clientDto } from '@/pages/ClientsPage/config/clientDto.ts'
import { ClientFormFieldsType } from '@/pages/ClientsPage/types/clientFormFields.ts'
import { AppButton, ButtonVariants } from '@/shared/ui/AppButton'
import { AppDropzone } from '@/shared/ui/AppDropzone'
import { PasswordField, TextField } from '@/shared/ui/Fields'
import styles from './ClientModalEdit.module.scss'

interface ClientModalEditProps {
	data: IClientResource
	onClickEdit: () => void
}

export const ClientModalEdit = ({ data, onClickEdit }: ClientModalEditProps) => {
	const [files, setFiles] = useState<File[] | null>(null)
	const clientData = clientDto(data)

	const { handleSubmit, register } = useForm<ClientFormFieldsType>({ defaultValues: clientData })
	const [updateClientById] = useUpdateClientByIdMutation()

	const onSubmit = async (formFields: ClientFormFieldsType) => {
		const fd = new FormData()

		try {
			Object.entries(formFields).forEach(([field, value]) => {
				if (value === '' || value === null) return
				fd.append(field, String(value))
			})

			if (files && files.length > 0) {
				fd.append('picture', files[0])
			}

			fd.append('_method', 'put')
			await updateClientById({ clientId: data.id, formData: fd }).unwrap()
			onClickEdit()
		} catch (e) {
			console.error(e)
		}
	}

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
					{...register('client_name')}
				/>
				<TextField
					label='Ідентифікатор'
					placeholder='Введіть ідентифікатор клієнта'
					{...register('client_identifier')}
				/>
				<TextField
					label='Username'
					placeholder='Введіть назву системи'
					{...register('username')}
					autoComplete='new-username'
				/>
				<PasswordField<ClientFormFieldsType> label='password' register={register} />
				<TextField label='СУБД' placeholder='Введіть субд' {...register('connection')} />
				<TextField label='База даних' placeholder='Введіть назву БД' {...register('database')} />
				<TextField label='Хост' placeholder='Введіть хост' {...register('host')} />
				<TextField label='Порт' placeholder='Введіть порт' {...register('port')} />
			</div>
			<div className={styles.actions}>
				<AppButton
					onPress={onClickEdit}
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
