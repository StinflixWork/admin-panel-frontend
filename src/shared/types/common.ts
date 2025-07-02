export interface IApiResponse {
	message: string
	errors?: Record<string, string[]>
}

export interface IApiResponseWithMeta<TData> {
	data: TData[]
	meta: TypeApiPagination
}

export type TypeApiPagination = {
	page: {
		current: number
		total: number
	}
	limit: number
	total: number
}

export interface IAccessTokenResource {
	access_token: string
	token_type: string
	expires_in: number
}
