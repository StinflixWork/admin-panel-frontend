import { useDisclosure } from '@heroui/modal'
import { ILanguageResource, useUpdateLanguageByIdMutation } from '@/entities/Language'
import { ILanguageCredentials } from '@/entities/Language/api/languageType.ts'
import { AppModal } from '@/shared/ui/Modals'
import { Pencil } from 'lucide-react'
import { languageDto } from '../../config/languageDto.ts'
import { LanguageForm } from '../LanguageForm'

interface EditLanguageModalProps {
	language: ILanguageResource
}

export const EditLanguageModal = ({ language }: EditLanguageModalProps) => {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
	const languageData = languageDto(language)

	const [updateLanguage] = useUpdateLanguageByIdMutation()

	const onSubmit = async (formFields: ILanguageCredentials) => {
		try {
			await updateLanguage({ languageId: language.id, data: formFields }).unwrap()
			onClose()
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<>
			<button className='p-1 rounded hover:bg-gray-light transition-colors' onClick={onOpen}>
				<Pencil className='text-green-brand' size={24} />
			</button>
			<AppModal isOpen={isOpen} onOpenChange={onOpenChange} title='Редагувати мову'>
				<LanguageForm
					onClose={onClose}
					getLanguageFormFields={onSubmit}
					languageData={languageData}
					isLoading={false}
					isEdit
				/>
			</AppModal>
		</>
	)
}
