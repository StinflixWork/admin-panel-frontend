import { useMemo } from 'react'
import { useDisclosure } from '@heroui/modal'
import { ILanguageResource } from '@/entities/Language'
import { AppButton, ButtonColors, ButtonVariants } from '@/shared/ui/AppButton'
import { AppModal } from '@/shared/ui/Modals'
import { LanguageReorder } from '../LanguageReorder'
import styles from './ReorderLanguagesModal.module.scss'

interface ReorderLanguagesModalProps {
	languages: ILanguageResource[]
}

export const ReorderLanguagesModal = ({ languages }: ReorderLanguagesModalProps) => {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

	const sortedLanguages = useMemo(() => {
		return [...languages].sort((a, b) => a.order - b.order)
	}, [languages])

	return (
		<>
			<AppButton onPress={onOpen} variant={ButtonVariants.OUTLINE}>
				Змінити порядок
			</AppButton>
			<AppModal title='Порядок мов' isOpen={isOpen} onOpenChange={onOpenChange}>
				<div className={styles.root}>
					<LanguageReorder languages={sortedLanguages} />
					<AppButton onPress={onClose} color={ButtonColors.DANGER}>
						Закрити
					</AppButton>
				</div>
			</AppModal>
		</>
	)
}
