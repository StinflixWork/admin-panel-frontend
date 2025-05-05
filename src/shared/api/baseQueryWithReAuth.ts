import { AppState } from '@/app/providers/StoreProvider'
import { LocalStorageKeys, LocalStorageService } from '@/shared/services/localStorageService.ts'
import { IAccessTokenResource } from '@/shared/types/common.ts'
import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

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
	const rememberMe = LocalStorageService.getItem(LocalStorageKeys.REMEMBER_ME)

	if (result.error?.status === 401 && rememberMe) {
		const refreshResult = await baseQuery(
			{ url: '/auth/refresh', method: 'POST', credentials: 'include' },
			api,
			extraOptions
		)

		if (refreshResult.data) {
			const { token_type, access_token } = refreshResult.data as IAccessTokenResource
			const newToken = `${token_type} ${access_token}`

			api.dispatch({ type: 'admin/setAccessToken', payload: newToken })

			result = await baseQuery(args, api, extraOptions)
		} else {
			api.dispatch({ type: 'admin/logout' })
			LocalStorageService.removeItem(LocalStorageKeys.REMEMBER_ME)
		}
	}

	return result
}
