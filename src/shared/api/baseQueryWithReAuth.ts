import { AppState } from '@/app/providers/StoreProvider'
import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import { IAccessTokenResource } from '../types/common.ts'

const baseQuery = fetchBaseQuery({
	baseUrl: __API__,
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as AppState).admin.accessToken

		if (token) {
			headers.set('Authorization', token)
		}
		headers.set('Accept', 'application/json')

		return headers
	}
})

export const baseQueryWithReAuth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions)

	if (result.error && result.error.status === 401) {
		const refreshResult = await baseQuery(
			{ url: '/auth/refresh', method: 'POST' },
			api,
			extraOptions
		)

		if (refreshResult.data) {
			const { token_type, access_token } = refreshResult.data as IAccessTokenResource
			const newToken = `${token_type} ${access_token}`

			api.dispatch({ type: 'admin/setAccessToken', payload: newToken })

			result = await baseQuery(args, api, extraOptions)
		} else {
			await baseQuery({ url: '/auth/logout', method: 'POST' }, api, extraOptions)
			api.dispatch({ type: 'admin/logout' })
		}
	}

	return result
}
