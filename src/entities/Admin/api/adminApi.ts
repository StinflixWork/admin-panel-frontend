import { api } from '@/shared/api/api.ts'
import { GET_ADMIN } from '@/shared/api/tags.ts'
import { IAccessTokenResource } from '@/shared/types/common.ts'
import { IAdminCredentials, IAdminSessionResponse } from './adminTypes.ts'

const adminApi = api.injectEndpoints({
	endpoints: build => ({
		login: build.mutation<IAccessTokenResource, IAdminCredentials>({
			query: adminCredentials => ({
				url: '/auth/login',
				method: 'POST',
				body: adminCredentials
			}),
			invalidatesTags: [GET_ADMIN]
		}),
		getSession: build.query<IAdminSessionResponse, void>({
			query: () => '/session',
			providesTags: [GET_ADMIN]
		})
	})
})

export const { useLoginMutation, useGetSessionQuery } = adminApi
