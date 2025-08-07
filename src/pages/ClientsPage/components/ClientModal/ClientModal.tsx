import { useDisclosure } from '@heroui/react'
import { AppModal } from '@/shared/ui/Modals'
import { Pencil } from 'lucide-react'
import { ClientModalContent } from './ClientModalContent'

interface ClientModalProps {
	clientId: string
}

export const ClientModal = ({ clientId }: ClientModalProps) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<>
			<button className='hover:bg-gray-light rounded p-1 transition-colors' onClick={onOpen}>
				<Pencil className='text-green-brand' size={24} />
			</button>
			<AppModal title='Редагування клієнта' isOpen={isOpen} onOpenChange={onOpenChange}>
				<ClientModalContent clientId={clientId} />
			</AppModal>
		</>
	)
}
