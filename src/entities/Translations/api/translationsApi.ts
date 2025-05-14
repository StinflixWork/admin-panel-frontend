import { api } from '@/shared/api/api.ts'
import { GET_TRANSLATIONS } from '@/shared/api/tags.ts'
import { IApiResponseWithMeta } from '@/shared/types/common.ts'
import { ITranslationResource } from '@/entities/Translations/api/translationsTypes.ts'

const translationsApi = api.injectEndpoints({
	endpoints: build => ({
		getTranslations: build.query<IApiResponseWithMeta<ITranslationResource>, void>({
			query: () => '/translations',
			providesTags: [GET_TRANSLATIONS]
		})
	})
})

export const { useGetTranslationsQuery } = translationsApi
