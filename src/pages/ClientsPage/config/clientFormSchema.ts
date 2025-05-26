import * as yup from 'yup'

export const clientFormSchema = yup.object({
	client_name: yup
		.string()
		.required("Ім'я клієнта обов'язково")
		.max(255, "Ім'я клієнта занадто довге"),

	client_identifier: yup
		.string()
		.required("Ідентифікатор обов'язковий")
		.max(255, 'Ідентифікатор занадто довгий'),

	connection: yup
		.string()
		.required("Тип з'єднання обов'язковий")
		.max(100, "Тип з'єднання занадто довгий"),

	host: yup
		.string()
		.required("Хост обов'язковий")
		.matches(
			/^([a-zA-Z0-9.-]+)$/,
			'Неправильний формат хоста (допустимі тільки букви, цифри, крапки і тире)'
		),

	port: yup
		.number()
		.typeError('Порт має бути числом')
		.required("Порт обов'язковий")
		.min(1, 'Порт має складатися щонайменше з 1 цифри')
		.max(65535, 'Порт не може перевищувати ліміт в 65535')
		.integer('Порт має бути цілим числом'),

	database: yup
		.string()
		.required("Назва бази даних обов'язкова")
		.max(255, 'Назва бази даних занадто довга'),

	username: yup.string().max(255, "Ім'я користувача занадто довге").nullable().notRequired(),

	password: yup.string().max(255, 'Пароль занадто довгий').nullable().notRequired()
})

export type ClientFormFieldsType = yup.InferType<typeof clientFormSchema>
