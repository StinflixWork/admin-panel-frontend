import * as yup from 'yup'

export const languageSchema = yup.object({
	name: yup.string().required("Назва обов'язкова"),
	code: yup.string().required("Код мови обов'язковий"),
	active: yup.boolean().optional().default(true)
})

export type LanguageFormFieldsType = yup.InferType<typeof languageSchema>
