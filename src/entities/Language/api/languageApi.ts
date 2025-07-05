import { api } from '@/shared/api/api.ts'
import { GET_LANGUAGE, GET_LANGUAGES } from '@/shared/api/tags.ts'
import { IApiResponseWithMeta } from '@/shared/types/common.ts'
import { PaginationState } from '@tanstack/react-table'
import {
	ILanguageCredentials,
	ILanguageResource,
	IUpdateLanguageRequest,
	IUpdateLanguageStatusRequest
} from './languageType.ts'

const languageApi = api.injectEndpoints({
	endpoints: build => ({
		getLanguages: build.query<IApiResponseWithMeta<ILanguageResource>, PaginationState>({
			query: ({ pageSize, pageIndex }) => ({
				url: '/languages',
				params: { page: pageIndex, limit: pageSize }
			}),
			providesTags: [GET_LANGUAGES]
		}),
		updateLanguageById: build.mutation<ILanguageResource, IUpdateLanguageRequest>({
			query: ({ languageId, data }) => ({
				url: `/languages/${languageId}`,
				method: 'POST',
				body: { ...data, _method: 'put' }
			}),
			invalidatesTags: [GET_LANGUAGE, GET_LANGUAGES]
		}),
		toggleActiveLanguage: build.mutation<ILanguageResource, IUpdateLanguageStatusRequest>({
			query: ({ languageId, active }) => ({
				url: `/languages/${languageId}`,
				method: 'POST',
				body: { active, _method: 'put' }
			}),
			invalidatesTags: [GET_LANGUAGE, GET_LANGUAGES]
		}),
		createLanguage: build.mutation<ILanguageResource, ILanguageCredentials>({
			query: languageData => ({
				url: '/languages',
				method: 'POST',
				body: languageData
			}),
			invalidatesTags: [GET_LANGUAGES]
		}),
		deleteLanguage: build.mutation<ILanguageResource, string>({
			query: languageId => ({
				url: `/languages/${languageId}`,
				method: 'DELETE'
			}),
			invalidatesTags: [GET_LANGUAGES]
		})
	})
})

export const {
	useGetLanguagesQuery,
	useCreateLanguageMutation,
	useUpdateLanguageByIdMutation,
	useDeleteLanguageMutation,
	useToggleActiveLanguageMutation
} = languageApi
