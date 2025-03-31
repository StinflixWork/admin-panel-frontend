import * as yup from 'yup'

export const validationAuthValues = yup
	.object({
		email: yup
			.string()
			.email('Вказано невірний email')
			.required("Email обов'язковий"),
		password: yup.string().min(8).required("Пароль обов'язковий"),
		rememberMe: yup.boolean().optional().default(false)
	})
	.required()
