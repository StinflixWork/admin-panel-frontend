import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReAuth } from './baseQueryWithReAuth.ts'
import { GET_ADMIN, GET_CLIENT, GET_CLIENTS } from './tags.ts'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: [GET_ADMIN, GET_CLIENTS, GET_CLIENT],
	baseQuery: baseQueryWithReAuth,
	endpoints: () => ({})
})
