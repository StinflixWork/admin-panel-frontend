import { IApiResponseWithMeta } from '@/shared/types/common.ts'
import { ColumnDef, OnChangeFn, PaginationState } from '@tanstack/react-table'
import { TableFooter } from '../../components'
import { Table } from '../Table'
import styles from './ContainerTable.module.scss'

interface ContainerTableProps<TData> {
	tableData: IApiResponseWithMeta<TData> | undefined
	columns: ColumnDef<TData>[]
	pagination: PaginationState
	setPagination: OnChangeFn<PaginationState>
}

export const ContainerTable = <T,>(props: ContainerTableProps<T>) => {
	const { tableData, columns, pagination, setPagination } = props

	return (
		<div className={styles.root}>
			<Table
				data={tableData?.data}
				columns={columns}
				options={{
					manualPagination: true,
					state: { pagination },
					onPaginationChange: setPagination
				}}
			/>
			{tableData && (
				<TableFooter
					total={tableData.meta.page.total}
					pagination={pagination}
					setPagination={setPagination}
				/>
			)}
		</div>
	)
}
