export interface IApiResponse {
	message: string
	errors?: Record<string, string[]>
}

export interface IApiResponseWithMeta<TData> {
	data: TData[]
	meta: TypeApiPagination
}

type TypeApiPagination = {
	page: {
		current: number
		total: number
	}
	limit: number
	total: number
}
