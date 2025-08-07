import { useGetLanguagesQuery } from '@/entities/Language'
import { LanguagesDndTable } from '@/features/LanguagesDndTable'
import { ErrorPage } from '@/pages'
import { AppLoader } from '@/shared/ui/AppLoader'
import { CreateLanguageModal } from '../../components/CreateLanguageModal'
import { languagesColumns } from '../../config/languagesColumns.tsx'

const LanguagesPage = () => {
	const { data, isLoading } = useGetLanguagesQuery()

	if (isLoading) {
		return <AppLoader />
	}

	if (!data) {
		return <ErrorPage />
	}

	return (
		<section className='section'>
			<div className='flex items-center justify-between'>
				<h2 className='text-gray-dark text-3xl font-semibold'>Мови</h2>
				<CreateLanguageModal />
			</div>
			<LanguagesDndTable data={data} columns={languagesColumns} />
		</section>
	)
}

export default LanguagesPage
