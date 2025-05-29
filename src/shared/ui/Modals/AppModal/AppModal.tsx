import { Modal, ModalBody, ModalContent, ModalHeader, ModalProps } from '@heroui/modal'
import styles from './AppModal.module.scss'

interface AppModalProps extends ModalProps {
	title?: string
}

// додати мемо та перевірити як рендериться з мемо та без
// додати Actions до верхньої частини модалки (кнопка закрить)
export const AppModal = ({ children, title, ...modalProps }: AppModalProps) => {
	return (
		<Modal
			scrollBehavior='inside'
			placement='top'
			classNames={{ base: styles.root }}
			{...modalProps}
		>
			<ModalContent>
				{title && <ModalHeader>{title}</ModalHeader>}
				<ModalBody>{children}</ModalBody>
			</ModalContent>
		</Modal>
	)
}
