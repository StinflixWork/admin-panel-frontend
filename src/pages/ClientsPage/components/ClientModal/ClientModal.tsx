import { useDisclosure } from '@heroui/modal'
import { AppModal } from '@/shared/ui/Modals'
import { Pencil } from 'lucide-react'
import styles from './ClientModal.module.scss'
import { ClientModalContent } from './ClientModalContent'

interface ClientModalProps {
	clientId: string
}

export const ClientModal = ({ clientId }: ClientModalProps) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<div className={styles.root}>
			<button className={styles.iconButton} onClick={onOpen}>
				<Pencil className='text-green-brand' size={24} />
			</button>
			<AppModal title='Редагування клієнта' isOpen={isOpen} onOpenChange={onOpenChange}>
				<ClientModalContent clientId={clientId} />
			</AppModal>
		</div>
	)
}
