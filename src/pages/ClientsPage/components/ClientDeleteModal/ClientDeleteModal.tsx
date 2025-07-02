import { useDisclosure } from '@heroui/modal'
import { useDeleteClientByIdMutation } from '@/entities/Client'
import { AppButton, ButtonVariants } from '@/shared/ui/AppButton'
import { AppModal } from '@/shared/ui/Modals'
import { Trash2 } from 'lucide-react'
import styles from './ClientDeleteModal.module.scss'

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
		<div className={styles.root}>
			<button className={styles.iconButton} onClick={onOpen}>
				<Trash2 className='text-red-basic' size={24} />
			</button>
			<AppModal title='Видалення користувача' isOpen={isOpen} onOpenChange={onOpenChange}>
				<div className='flex flex-col gap-y-4'>
					<h3>Ви точно хочете видалити цього користувача?</h3>
					<div className='grid grid-cols-2 items-center gap-x-3'>
						<AppButton variant={ButtonVariants.OUTLINE} onPress={onClose}>
							Скасувати
						</AppButton>
						<AppButton color='danger' onPress={handleDeleteClient}>
							Видалити
						</AppButton>
					</div>
				</div>
			</AppModal>
		</div>
	)
}
