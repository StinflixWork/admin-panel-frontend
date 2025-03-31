import { api } from '@/shared/api/api.ts'
import { GET_ADMIN } from '@/shared/api/tags.ts'
import { IAdminCredentials, IAdminSessionResponse } from './adminTypes.ts'

const adminApi = api.injectEndpoints({
	endpoints: build => ({
		getSession: build.mutation<IAdminSessionResponse, IAdminCredentials>({
			query: adminCredentials => ({
				url: 'auth/sign-in',
				method: 'POST',
				body: adminCredentials
			}),
			invalidatesTags: [GET_ADMIN]
		})
	})
})

export const { useGetSessionMutation } = adminApi
