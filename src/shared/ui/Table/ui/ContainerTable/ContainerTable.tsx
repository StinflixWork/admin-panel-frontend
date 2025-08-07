import { IApiResponseWithMeta } from '@/shared/types/common.ts'
import { ColumnDef, OnChangeFn, PaginationState } from '@tanstack/react-table'
import { TableFooter } from '../../components'
import { Table } from '../Table'

interface ContainerTableProps<TData> {
	tableData: IApiResponseWithMeta<TData> | undefined
	columns: ColumnDef<TData>[]
	pagination: PaginationState
	setPagination: OnChangeFn<PaginationState>
}

export const ContainerTable = <T,>(props: ContainerTableProps<T>) => {
	const { tableData, columns, pagination, setPagination } = props
	const pageTotal = tableData?.meta.page.total ?? 0

	return (
		<div className='shadow-blue-light overflow-hidden rounded-lg bg-white pb-4'>
			<Table
				data={tableData?.data}
				columns={columns}
				options={{
					manualPagination: true,
					state: { pagination },
					onPaginationChange: setPagination
				}}
			/>
			<div className='border-gray-secondary border-t border-solid'>
				<TableFooter total={pageTotal} pagination={pagination} setPagination={setPagination} />
			</div>
		</div>
	)
}
