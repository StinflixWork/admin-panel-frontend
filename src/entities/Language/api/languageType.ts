export interface IUpdateLanguageStatusRequest {
	languageId: string
	active: number
}

export interface IUpdateLanguageRequest {
	languageId: string
	data: Partial<ILanguageCredentials>
}

export interface ILanguageResource {
	id: string
	name: string
	code: string
	active: boolean
	default: boolean
	order: number
	created_at: string
	updated_at: string
}

export interface ILanguageCredentials {
	name: string
	code: string
	active: boolean
}
