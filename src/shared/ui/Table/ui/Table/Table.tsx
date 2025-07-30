import { ColumnDef, TableOptions, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { clsx } from 'clsx'
import { TableBody, TableHeader, TableNoData } from '../../components'
import styles from './Table.module.scss'

interface TableProps<TData> {
	data: TData[] | undefined
	columns: ColumnDef<TData>[]
	options?: Omit<TableOptions<TData>, 'getCoreRowModel' | 'data' | 'columns'>
	isShadow?: boolean
}

const fallbackData: never[] = []

export const Table = <T,>({ data, columns, options, isShadow = false }: TableProps<T>) => {
	const table = useReactTable({
		columns,
		data: data || fallbackData,
		getCoreRowModel: getCoreRowModel(),
		...options
	})

	return (
		<div className={clsx(styles.root, { [styles.shadow]: isShadow })}>
			<table className={styles.table}>
				<TableHeader getHeaderGroups={table.getHeaderGroups} />
				<tbody>{data ? <TableBody getRowModel={table.getRowModel} /> : <TableNoData />}</tbody>
			</table>
		</div>
	)
}
