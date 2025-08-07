import { useGetClientsQuery } from '@/entities/Client'
import { ErrorPage } from '@/pages'
import { useQueryPagination } from '@/shared/libs/hooks/useQueryPagination.ts'
import { AppLoader } from '@/shared/ui/AppLoader'
import { ContainerTable } from '@/shared/ui/Table'
import { ClientCreateModal } from '../../components/ClientCreateModal'
import { clientsColumns } from '../../config/clientsColumns.tsx'

const ClientsPage = () => {
	const { pagination, setPagination } = useQueryPagination()

	const { data, isLoading } = useGetClientsQuery(pagination)

	if (isLoading) {
		return <AppLoader />
	}

	if (!data) {
		return <ErrorPage />
	}

	return (
		<section className='section'>
			<div className='flex items-center justify-between'>
				<h2 className='text-gray-dark text-3xl font-semibold'>Клієнти</h2>
				<ClientCreateModal />
			</div>
			<ContainerTable
				tableData={data}
				columns={clientsColumns}
				pagination={pagination}
				setPagination={setPagination}
			/>
		</section>
	)
}

export default ClientsPage
