import { RowModel, flexRender } from '@tanstack/react-table'
import styles from './TableBody.module.scss'

interface TableBodyProps<TData> {
	getRowModel(): RowModel<TData>
}

export const TableBody = <T,>({ getRowModel }: TableBodyProps<T>) => {
	return getRowModel().rows.map(row => (
		<tr key={row.id} className={styles.row}>
			{row.getVisibleCells().map(cell => (
				<td key={cell.id} className={styles.cell}>
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</td>
			))}
		</tr>
	))
}
