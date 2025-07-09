import { useMemo } from 'react'
import { useDisclosure } from '@heroui/modal'
import { ILanguageResource } from '@/entities/Language'
import { TypeApiPagination } from '@/shared/types/common.ts'
import { AppButton, ButtonColors, ButtonVariants } from '@/shared/ui/AppButton'
import { AppModal } from '@/shared/ui/Modals'
import { LanguageOrderItem } from '../LanguageOrderItem'
import styles from './ReorderLanguagesModal.module.scss'

interface ReorderLanguagesModalProps {
	languages: ILanguageResource[]
	metaLanguages: TypeApiPagination
}

export const ReorderLanguagesModal = ({ languages, metaLanguages }: ReorderLanguagesModalProps) => {
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
					<div className={styles.items}>
						{sortedLanguages.map(language => (
							<LanguageOrderItem
								key={language.id}
								language={language}
								total={metaLanguages.total}
							/>
						))}
					</div>
					<AppButton onPress={onClose} color={ButtonColors.DANGER}>
						Закрити
					</AppButton>
				</div>
			</AppModal>
		</>
	)
}
