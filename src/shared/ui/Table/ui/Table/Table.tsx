import { IApiResponseWithMeta } from '@/shared/types/common.ts'
import {
	ColumnDef,
	OnChangeFn,
	PaginationState,
	getCoreRowModel,
	useReactTable
} from '@tanstack/react-table'
import { TableBody, TableFooter, TableHeader, TableNoData } from '../../components'
import styles from './Table.module.scss'

interface TableProps<TData> {
	tableData: IApiResponseWithMeta<TData> | undefined
	columns: ColumnDef<TData>[]
	pagination: PaginationState
	setPagination: OnChangeFn<PaginationState>
}

const fallbackData: never[] = []

export const Table = <T,>(props: TableProps<T>) => {
	const { tableData, columns, pagination, setPagination } = props

	const table = useReactTable({
		columns,
		data: tableData?.data || fallbackData,
		manualPagination: true,
		state: {
			pagination
		},
		onPaginationChange: setPagination,
		getCoreRowModel: getCoreRowModel()
	})

	return (
		<div className={styles.root}>
			<table className={styles.table}>
				<TableHeader getHeaderGroups={table.getHeaderGroups} />
				<tbody>{tableData ? <TableBody getRowModel={table.getRowModel} /> : <TableNoData />}</tbody>
			</table>
			{tableData && (
				<TableFooter
					total={tableData.meta.total}
					pagination={pagination}
					setPagination={setPagination}
				/>
			)}
		</div>
	)
}
