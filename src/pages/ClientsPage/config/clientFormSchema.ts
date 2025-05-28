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
			/^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/,
			'Неправильний формат хоста. Введіть коректну IP-адресу (наприклад, 192.168.0.1)'
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

export const clientCreateFormSchema = yup.object({
	client_name: yup
		.string()
		.required("Ім'я клієнта обов'язково")
		.max(255, "Ім'я клієнта занадто довге"),

	domain: yup
		.string()
		.required("Домен обов'язковий")
		.url('Домен повинен бути посиланням. Наприклад: https://some.dom/'),

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
			/^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/,
			'Неправильний формат хоста. Введіть коректну IP-адресу (наприклад, 192.168.0.1)'
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

	username: yup
		.string()
		.required("Користувач обов'язковий")
		.max(255, "Ім'я користувача занадто довге"),

	password: yup
		.string()
		.required("Пароль обов'язковий")
		.min(6, 'Пароль повинен місти щонайменше 6 символів')
		.max(255, 'Пароль занадто довгий'),

	active: yup.boolean().optional().default(true)
})

export type ClientFormFieldsType = yup.InferType<typeof clientFormSchema>
export type ClientCreateFormFieldsType = yup.InferType<typeof clientCreateFormSchema>
