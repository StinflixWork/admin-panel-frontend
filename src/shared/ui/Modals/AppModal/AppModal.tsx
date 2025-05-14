import { Modal, ModalBody, ModalContent, ModalHeader, ModalProps } from '@heroui/modal'
import styles from './AppModal.module.scss'

interface AppModalProps extends ModalProps {
	title?: string
}

export const AppModal = ({ children, title, ...modalProps }: AppModalProps) => {
	return (
		<Modal {...modalProps} classNames={{ base: styles.root }}>
			<ModalContent>
				{title && <ModalHeader>{title}</ModalHeader>}
				<ModalBody>{children}</ModalBody>
			</ModalContent>
		</Modal>
	)
}
