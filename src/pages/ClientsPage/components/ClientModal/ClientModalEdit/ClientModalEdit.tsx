import { useState } from 'react'
import { useUpdateClientByIdMutation } from '@/entities/Client'
import { IClientResource } from '@/entities/Client/api/clientTypes.ts'
import { ClientForm } from '@/pages/ClientsPage/components/ClientForm'
import { ClientFormFieldsType } from '@/pages/ClientsPage/config/clientFormSchema.ts'
import { isEmpty } from '@/shared/libs/utils/isEmpty.ts'

interface ClientModalEditProps {
	data: IClientResource
	onClickEdit: () => void
}

export const ClientModalEdit = ({ data, onClickEdit }: ClientModalEditProps) => {
	const [file, setFile] = useState<File | null>(null)

	const [updateClientById] = useUpdateClientByIdMutation()

	const onSubmit = async (formFields: ClientFormFieldsType) => {
		const fd = new FormData()

		try {
			Object.entries(formFields).forEach(([field, value]) => {
				if (!isEmpty(value)) {
					fd.append(field, String(value))
				}
			})

			if (file) {
				fd.append('picture', file)
			}

			fd.append('_method', 'put')
			await updateClientById({ clientId: data.id, formData: fd }).unwrap()
			onClickEdit()
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<ClientForm
			onSubmit={onSubmit}
			onCloseModal={onClickEdit}
			setFile={setFile}
			initialValues={data}
		/>
	)
}
