import { useState } from 'react'
import { useGetClientsQuery } from '@/entities/Client'
import { AppLoader } from '@/shared/ui/AppLoader'
import { Table } from '@/shared/ui/Table'
import { clientsColumns } from '../../config/clientsColumns.tsx'
import styles from './ClientsPage.module.scss'

const ClientsPage = () => {
	const [pagination, setPagination] = useState({ pageIndex: 1, pageSize: 1 })
	const { data, isLoading } = useGetClientsQuery(pagination)

	if (isLoading) {
		return <AppLoader />
	}

	// зробити контейнер для секкції, і зробити контейнер для шапки
	return (
		<section className={styles.root}>
			<div>
				<h2 className='text-3xl font-semibold text-gray-dark'>Клієнти</h2>
			</div>
			<Table
				tableData={data}
				columns={clientsColumns}
				pagination={pagination}
				setPagination={setPagination}
			/>
		</section>
	)
}

export default ClientsPage
