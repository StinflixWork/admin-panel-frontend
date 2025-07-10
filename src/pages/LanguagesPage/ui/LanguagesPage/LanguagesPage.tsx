import { useGetLanguagesQuery } from '@/entities/Language'
import { ErrorPage } from '@/pages'
import { AppLoader } from '@/shared/ui/AppLoader'
import { CreateLanguageModal } from '../../components/CreateLanguageModal'
import { ReorderLanguagesModal } from '../../components/ReorderLanguagesModal'
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
					<ReorderLanguagesModal languages={data ?? []} />
					<CreateLanguageModal />
				</div>
			</div>
		</section>
	)
}

export default LanguagesPage
