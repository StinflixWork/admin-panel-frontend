import { useState } from 'react'
import { useDisclosure } from '@heroui/modal'
import { useCreateClientMutation } from '@/entities/Client'
import { ClientCreateForm } from '@/pages/ClientsPage/components/ClientCreateForm'
import { AppButton } from '@/shared/ui/AppButton'
import { AppModal } from '@/shared/ui/Modals'
import { ClientCreateFormFieldsType } from '../../config/clientFormSchema.ts'

export const ClientCreateModal = () => {
	const [files, setFiles] = useState<File[] | null>(null)
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

	const [createClient] = useCreateClientMutation()

	const onSubmit = async (formFields: ClientCreateFormFieldsType) => {
		try {
			const fd = new FormData()

			Object.entries(formFields).forEach(([key, value]) => {
				if (key === 'active') {
					fd.append('active', String(+value))
				} else {
					fd.append(key, String(value))
				}
			})

			if (files && files.length > 0) {
				fd.append('picture', files[0])
			}

			await createClient(fd).unwrap()
			onClose()
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<>
			<AppButton onPress={onOpen}>Створити клієнта</AppButton>
			<AppModal isOpen={isOpen} onOpenChange={onOpenChange} title='Створити клієнта'>
				<ClientCreateForm onSubmit={onSubmit} onCloseModal={onClose} setFiles={setFiles} />
			</AppModal>
		</>
	)
}
