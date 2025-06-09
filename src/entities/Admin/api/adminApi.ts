import { api } from '@/shared/api/api.ts'
import { GET_ADMIN } from '@/shared/api/tags.ts'
import { IAccessTokenResource, IApiResponse } from '@/shared/types/common.ts'
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
		refresh: build.mutation<IAccessTokenResource, void>({
			query: () => ({
				url: '/auth/refresh',
				method: 'POST'
			}),
			invalidatesTags: [GET_ADMIN]
		}),
		logout: build.mutation<IApiResponse, void>({
			query: () => ({
				url: '/auth/logout',
				method: 'POST'
			}),
			invalidatesTags: [GET_ADMIN]
		}),
		getSession: build.query<IAdminSessionResponse, void>({
			query: () => '/session',
			providesTags: [GET_ADMIN]
		})
	})
})

export const { useLoginMutation, useLogoutMutation, useRefreshMutation, useGetSessionQuery } =
	adminApi
