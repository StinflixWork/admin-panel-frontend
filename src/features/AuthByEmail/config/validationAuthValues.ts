import * as yup from 'yup'

export const validationAuthValues = yup
	.object({
		email: yup.string().email('Вказано невірний email').required("Email обов'язковий"),
		password: yup.string().min(6).required("Пароль обов'язковий")
	})
	.required()

export type AuthFormFieldsType = yup.InferType<typeof validationAuthValues>
