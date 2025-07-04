import { useState } from 'react'
import { useGetLanguagesQuery } from '@/entities/Language'
import { ErrorPage } from '@/pages'
import { CreateLanguageModal } from '@/pages/LanguagesPage/components/CreateLanguageModal'
import { AppLoader } from '@/shared/ui/AppLoader'
import { Table } from '@/shared/ui/Table'
import { languagesColumns } from '../../config/languagesColumns.tsx'
import styles from './LanguagesPage.module.scss'

const LanguagesPage = () => {
	const [pagination, setPagination] = useState({ pageIndex: 1, pageSize: 10 })
	const { data, isLoading } = useGetLanguagesQuery(pagination)

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
				<CreateLanguageModal />
			</div>
			<Table
				tableData={data}
				columns={languagesColumns}
				pagination={pagination}
				setPagination={setPagination}
			/>
		</section>
	)
}

export default LanguagesPage
