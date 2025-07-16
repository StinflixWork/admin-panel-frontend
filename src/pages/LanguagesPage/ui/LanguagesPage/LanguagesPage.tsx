import { useGetLanguagesQuery } from '@/entities/Language'
import { LanguagesDndTable } from '@/features/LanguagesDndTable'
import { ErrorPage } from '@/pages'
import { AppLoader } from '@/shared/ui/AppLoader'
import { CreateLanguageModal } from '../../components/CreateLanguageModal'
import { languagesColumns } from '../../config/languagesColumns.tsx'
import styles from './LanguagesPage.module.scss'

const LanguagesPage = () => {
	const { data, isLoading } = useGetLanguagesQuery()

	if (isLoading) {
		return <AppLoader />
	}

	if (!data) {
		return <ErrorPage />
	}

	return (
		<section className={styles.root}>
			<div className={styles.header}>
				<h2 className='text-3xl font-semibold text-gray-dark'>Мови</h2>
				<div className={styles.actions}>
					<CreateLanguageModal />
				</div>
			</div>
			<LanguagesDndTable data={data} columns={languagesColumns} />
		</section>
	)
}

export default LanguagesPage
