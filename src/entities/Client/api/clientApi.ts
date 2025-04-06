import { api } from '@/shared/api/api.ts'
import { GET_CLIENT, GET_CLIENTS } from '@/shared/api/tags.ts'
import { IApiResponse, IApiResponseWithMeta } from '@/shared/types/common.ts'
import { IClientResource } from './clientTypes.ts'

const clientApi = api.injectEndpoints({
	endpoints: build => ({
		getClients: build.query<IApiResponseWithMeta<IClientResource>, void>({
			query: () => '/clients',
			providesTags: [GET_CLIENTS]
		}),
		getClientById: build.query<IClientResource, string>({
			query: clientId => ({
				url: `/clients/${clientId}`
			}),
			providesTags: [GET_CLIENT]
		}),
		createClient: build.mutation<IApiResponse, FormData>({
			query: formData => ({
				url: '/clients',
				method: 'POST',
				body: formData
			}),
			invalidatesTags: [GET_CLIENTS]
		}),
		updateClientById: build.mutation<
			IApiResponse,
			{ clientId: string; formData: FormData }
		>({
			query: ({ clientId, formData }) => ({
				url: `/clients/${clientId}`,
				method: 'PUT',
				body: formData
			}),
			invalidatesTags: [GET_CLIENT, GET_CLIENTS]
		}),
		deleteClientById: build.mutation<IApiResponse, string>({
			query: clientId => ({
				url: `/clients/${clientId}`,
				method: 'DELETE'
			}),
			invalidatesTags: [GET_CLIENT, GET_CLIENTS]
		}),
		generateClientApiToken: build.mutation<
			IApiResponse,
			{ client_identifier: string }
		>({
			query: ({ client_identifier }) => ({
				url: '/clients/generate-token',
				method: 'POST',
				body: client_identifier
			})
		})
	})
})

export const {
	useGetClientsQuery,
	useGetClientByIdQuery,
	useCreateClientMutation,
	useUpdateClientByIdMutation,
	useDeleteClientByIdMutation,
	useGenerateClientApiTokenMutation
} = clientApi
