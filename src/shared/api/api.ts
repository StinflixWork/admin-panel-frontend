import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
	LocalStorageKeys,
	LocalStorageService
} from '../services/localStorageService.ts'
import { GET_ADMIN, GET_CLIENT, GET_CLIENTS } from './tags.ts'

const baseQueryWithHeaders = fetchBaseQuery({
	baseUrl: __API__,
	prepareHeaders: headers => {
		headers.set('Accept', 'application/json')
		const accessToken = LocalStorageService.getItem(
			LocalStorageKeys.ACCESS_TOKEN
		)

		if (accessToken) {
			headers.set('Authorization', accessToken)
		}

		return headers
	},
	credentials: 'include'
})

export const api = createApi({
	reducerPath: 'api',
	tagTypes: [GET_ADMIN, GET_CLIENTS, GET_CLIENT],
	baseQuery: baseQueryWithHeaders,
	endpoints: () => ({})
})
