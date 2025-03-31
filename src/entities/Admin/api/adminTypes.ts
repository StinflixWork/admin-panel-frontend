export interface IAdminSessionResponse {
	access_token: string
	token_type: string
	expires_at: string
}

export interface IAdminCredentials {
	email: string
	password: string
}
