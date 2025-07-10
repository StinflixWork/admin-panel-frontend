import { useDisclosure } from '@heroui/modal'
import { useDeleteLanguageMutation } from '@/entities/Language'
import { AppButton, ButtonVariants } from '@/shared/ui/AppButton'
import { AppModal } from '@/shared/ui/Modals'
import { Trash2 } from 'lucide-react'
import styles from './LanguageDeleteModal.module.scss'

interface LanguageDeleteModalProps {
	languageId: string
}

export const LanguageDeleteModal = ({ languageId }: LanguageDeleteModalProps) => {
	const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure()

	const [deleteLanguage] = useDeleteLanguageMutation()

	const handleDeleteClient = async () => {
		try {
			await deleteLanguage(languageId).unwrap()
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
			<AppModal title='Видалення мови' isOpen={isOpen} onOpenChange={onOpenChange}>
				<div className='flex flex-col gap-y-4'>
					<h3>Ви точно хочете видалити цю мову?</h3>
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
