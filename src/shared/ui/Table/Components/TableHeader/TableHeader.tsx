import { HeaderGroup, flexRender } from '@tanstack/react-table'
import styles from './TableHeader.module.scss'

interface TableHeaderProps<TData> {
	getHeaderGroups(): HeaderGroup<TData>[]
}

export const TableHeader = <T,>({ getHeaderGroups }: TableHeaderProps<T>) => {
	return (
		<thead className={styles.root}>
			{getHeaderGroups().map(headerGroup => (
				<tr key={headerGroup.id} className={styles.row}>
					{headerGroup.headers.map(header => (
						<th key={header.id} colSpan={header.colSpan} className={styles.cell}>
							{flexRender(header.column.columnDef.header, header.getContext())}
						</th>
					))}
				</tr>
			))}
		</thead>
	)
}
