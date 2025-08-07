import { useDisclosure } from '@heroui/react'
import { useDeleteClientByIdMutation } from '@/entities/Client'
import { AppButton } from '@/shared/ui/AppButton'
import { AppModal } from '@/shared/ui/Modals'
import { Trash2 } from 'lucide-react'

interface ClientDeleteModalProps {
	clientId: string
}

export const ClientDeleteModal = ({ clientId }: ClientDeleteModalProps) => {
	const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure()

	const [deleteClientById] = useDeleteClientByIdMutation()

	const handleDeleteClient = async () => {
		try {
			await deleteClientById(clientId).unwrap()
			onClose()
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<>
			<button className='hover:bg-gray-light rounded p-1 transition-colors' onClick={onOpen}>
				<Trash2 className='text-red-basic' size={24} />
			</button>
			<AppModal title='Видалення користувача' isOpen={isOpen} onOpenChange={onOpenChange}>
				<div className='flex flex-col gap-y-4'>
					<h3>Ви точно хочете видалити цього користувача?</h3>
					<div className='grid grid-cols-2 items-center gap-x-3'>
						<AppButton variant='outline' onPress={onClose}>
							Скасувати
						</AppButton>
						<AppButton color='danger' onPress={handleDeleteClient}>
							Видалити
						</AppButton>
					</div>
				</div>
			</AppModal>
		</>
	)
}
