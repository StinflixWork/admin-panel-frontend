import { AppState } from '@/app/providers/StoreProvider'
import { REMEMBER_ME } from '@/shared/constants/common.ts'
import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
import { AppRoutes } from '../constants/routes/'
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
	const rememberMe = Cookies.get(REMEMBER_ME)

	if (result.error?.status === 401 && rememberMe) {
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
			api.dispatch({ type: 'admin/logout' })
			await baseQuery({ url: '/auth/logout', method: 'POST' }, api, extraOptions)
			Cookies.remove(REMEMBER_ME)
			window.location.href = AppRoutes.AUTH
		}
	}

	return result
}
