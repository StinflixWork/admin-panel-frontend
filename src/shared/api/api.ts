import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReAuth } from './baseQueryWithReAuth.ts'
import { GET_ADMIN, GET_CLIENT, GET_CLIENTS, GET_LANGUAGE, GET_LANGUAGES } from './tags.ts'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: [GET_ADMIN, GET_CLIENTS, GET_CLIENT, GET_LANGUAGES, GET_LANGUAGE],
	baseQuery: baseQueryWithReAuth,
	endpoints: () => ({})
})
