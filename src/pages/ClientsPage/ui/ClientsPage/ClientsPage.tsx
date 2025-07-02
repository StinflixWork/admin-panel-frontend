import { useState } from 'react'
import { useGetClientsQuery } from '@/entities/Client'
import { ErrorPage } from '@/pages'
import { AppLoader } from '@/shared/ui/AppLoader'
import { Table } from '@/shared/ui/Table'
import { ClientCreateModal } from '../../components/ClientCreateModal'
import { clientsColumns } from '../../config/clientsColumns.tsx'
import styles from './ClientsPage.module.scss'

const ClientsPage = () => {
	const [pagination, setPagination] = useState({ pageIndex: 1, pageSize: 10 })
	const { data, isLoading } = useGetClientsQuery(pagination)

	if (isLoading) {
		return <AppLoader />
	}

	if (!data) {
		return <ErrorPage />
	}

	// зробити контейнер для секкції, і зробити контейнер для шапки
	return (
		<section className={styles.root}>
			<div className={styles.header}>
				<h2 className='text-3xl font-semibold text-gray-dark'>Клієнти</h2>
				<ClientCreateModal />
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
