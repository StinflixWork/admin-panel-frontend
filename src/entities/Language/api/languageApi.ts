import { api } from '@/shared/api/api.ts'
import { IApiResponseWithMeta } from '@/shared/types/common.ts'
import { PaginationState } from '@tanstack/react-table'
import { ILanguageCredentials, ILanguageResource } from './languageType.ts'

const languageApi = api.injectEndpoints({
	endpoints: build => ({
		getLanguages: build.query<IApiResponseWithMeta<ILanguageResource>, PaginationState>({
			query: ({ pageSize, pageIndex }) => ({
				url: '/languages',
				params: { page: pageIndex, limit: pageSize }
			})
		}),
		createLanguage: build.mutation<ILanguageResource, ILanguageCredentials>({
			query: languageData => ({
				url: '/languages',
				method: 'POST',
				body: languageData
			})
		})
	})
})

export const { useGetLanguagesQuery, useCreateLanguageMutation } = languageApi
