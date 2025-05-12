import { useState } from 'react'
import { useGetClientsQuery } from '@/entities/Client'
import { Table } from '@/shared/ui/Table'
import { clientsColumns } from '../../config/clientsColumns.tsx'
import styles from './ClientsPage.module.scss'

const ClientsPage = () => {
	const [pagination, setPagination] = useState({ pageIndex: 1, pageSize: 1 })
	const { data, isLoading } = useGetClientsQuery(pagination)

	if (isLoading) {
		return <div>Загрузка</div>
	}

	return (
		<section className={styles.root}>
			<div>
				<h2>Клієнти</h2>
			</div>
			<div>
				<Table
					tableData={data}
					columns={clientsColumns}
					pagination={pagination}
					setPagination={setPagination}
				/>
			</div>
		</section>
	)
}

export default ClientsPage
