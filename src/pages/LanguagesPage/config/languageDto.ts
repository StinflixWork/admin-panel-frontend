import { ILanguageResource } from '@/entities/Language'
import { LanguageFormFieldsType } from './languageFormSchema.ts'

export const languageDto = (language: ILanguageResource): LanguageFormFieldsType => ({
	name: language.name ?? '',
	code: language.code ?? '',
	active: language.active ?? false
})
