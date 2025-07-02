export interface IAdminCredentials {
	email: string
	password: string
}

export interface IAdminSessionResponse {
	user: IAdminResource
	roles: string[]
	permissions: string[]
}

export interface IAdminResource {
	email: string
	phone: string
	first_name: string | null
	last_name: string | null
	father_name: string | null
	avatar: string | null
}
