import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Checkbox } from '@heroui/checkbox'
import { ILanguageCredentials } from '@/entities/Language/api/languageType.ts'
import { AppButton, ButtonVariants } from '@/shared/ui/AppButton'
import { SelectField } from '@/shared/ui/Fields/SelectField'
import { TextField } from '@/shared/ui/Fields/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import isoLang from 'iso-639-1'
import { LanguageFormFieldsType, languageSchema } from '../../config/languageFormSchema'
import styles from './LanguageForm.module.scss'

interface LanguageFormProps {
	onClose: () => void
	getLanguageFormFields: (formFields: ILanguageCredentials) => Promise<void>
	isLoading: boolean
	isEdit?: boolean
	languageData?: LanguageFormFieldsType
}

const initialState: LanguageFormFieldsType = {
	name: '',
	code: '',
	active: true
}

export const LanguageForm = (props: LanguageFormProps) => {
	const { getLanguageFormFields, onClose, languageData, isLoading = false, isEdit = false } = props

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<LanguageFormFieldsType>({
		defaultValues: isEdit ? languageData : initialState,
		resolver: yupResolver(languageSchema)
	})

	const languageOptions = isoLang.getAllCodes().map(code => ({
		label: `${isoLang.getName(code)} (${code.toUpperCase()})`,
		key: code
	}))

	const onSubmit: SubmitHandler<LanguageFormFieldsType> = async formFields => {
		try {
			const formattedFields = { ...formFields, active: +formFields.active }
			await getLanguageFormFields(formattedFields)
			reset()
		} catch (e) {
			console.error(e)
		}
	}

	useEffect(() => {
		reset(isEdit ? languageData : initialState)
	}, [isEdit, languageData, reset])

	return (
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
					onPress={onClose}
					variant={ButtonVariants.OUTLINE}
					color='danger'
					type='button'
					fullWidth
				>
					Скасувати
				</AppButton>
				<AppButton type='submit' isLoading={isLoading} fullWidth>
					{isEdit ? 'Редагувати' : 'Створити'}
				</AppButton>
			</div>
		</form>
	)
}
