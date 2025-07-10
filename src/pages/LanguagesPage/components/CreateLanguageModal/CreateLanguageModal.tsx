import { useDisclosure } from '@heroui/modal'
import { useCreateLanguageMutation } from '@/entities/Language'
import { ILanguageCredentials } from '@/entities/Language/api/languageType.ts'
import { LanguageForm } from '@/pages/LanguagesPage/components/LanguageForm'
import { AppButton } from '@/shared/ui/AppButton'
import { AppModal } from '@/shared/ui/Modals'

export const CreateLanguageModal = () => {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
	const [createLanguage, { isLoading }] = useCreateLanguageMutation()

	const onSubmit = async (formFields: ILanguageCredentials) => {
		try {
			await createLanguage(formFields).unwrap()
			onClose()
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<>
			<AppButton onPress={onOpen}>Додати мову</AppButton>
			<AppModal isOpen={isOpen} onOpenChange={onOpenChange} title='Створити мову'>
				<LanguageForm onClose={onClose} getLanguageFormFields={onSubmit} isLoading={isLoading} />
			</AppModal>
		</>
	)
}
