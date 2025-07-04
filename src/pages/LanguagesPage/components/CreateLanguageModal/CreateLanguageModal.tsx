import { SubmitHandler, useForm } from 'react-hook-form'
import { Checkbox } from '@heroui/checkbox'
import { useDisclosure } from '@heroui/modal'
import { useCreateLanguageMutation } from '@/entities/Language'
import { AppButton, ButtonVariants } from '@/shared/ui/AppButton'
import { SelectField } from '@/shared/ui/Fields/SelectField'
import { TextField } from '@/shared/ui/Fields/TextField'
import { AppModal } from '@/shared/ui/Modals'
import { yupResolver } from '@hookform/resolvers/yup'
import isoLang from 'iso-639-1'
import { LanguageFormFieldsType, languageSchema } from '../../config/languageFormSchema'
import styles from './CreateLanguageModal.module.scss'

export const CreateLanguageModal = () => {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
	const [createLanguage, { isLoading }] = useCreateLanguageMutation()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<LanguageFormFieldsType>({
		defaultValues: { active: true },
		resolver: yupResolver(languageSchema)
	})

	const languageOptions = isoLang.getAllCodes().map(code => ({
		label: `${isoLang.getName(code)} (${code.toUpperCase()})`,
		key: code
	}))

	const onSubmit: SubmitHandler<LanguageFormFieldsType> = async formFields => {
		try {
			const formattedFields = { ...formFields, active: +formFields.active }
			await createLanguage(formattedFields).unwrap()
			handleCloseModal()
		} catch (e) {
			console.error(e)
		}
	}

	const handleCloseModal = () => {
		onClose()
		reset()
	}

	return (
		<>
			<AppButton onPress={onOpen}>Додати мову</AppButton>
			<AppModal isOpen={isOpen} onOpenChange={onOpenChange} title='Створити мову'>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
					<div className={styles.fields}>
						<TextField
							label='Назва'
							placeholder='Введіть назву мови'
							error={errors.name?.message}
							{...register('name')}
						/>
						<SelectField
							label='Код'
							placeholder='Оберіть код'
							items={languageOptions}
							{...register('code')}
						/>
						<Checkbox {...register('active')}>Активний</Checkbox>
					</div>
					<div className={styles.actions}>
						<AppButton
							onPress={handleCloseModal}
							variant={ButtonVariants.OUTLINE}
							color='danger'
							type='button'
							fullWidth
						>
							Скасувати
						</AppButton>
						<AppButton type='submit' isLoading={isLoading} fullWidth>
							Створити
						</AppButton>
					</div>
				</form>
			</AppModal>
		</>
	)
}
