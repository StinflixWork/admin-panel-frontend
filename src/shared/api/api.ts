import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GET_ADMIN } from './tags.ts'

const baseQueryWithHeaders = fetchBaseQuery({
	baseUrl: __API__,
	prepareHeaders: headers => headers,
	credentials: 'include'
})

export const api = createApi({
	reducerPath: 'api',
	tagTypes: [GET_ADMIN],
	baseQuery: baseQueryWithHeaders,
	endpoints: () => ({})
})
