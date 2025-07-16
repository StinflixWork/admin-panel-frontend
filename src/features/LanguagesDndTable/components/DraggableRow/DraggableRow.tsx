import { CSSProperties } from 'react'
import { ILanguageResource } from '@/entities/Language'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Row, flexRender } from '@tanstack/react-table'
import styles from './DraggableRow.module.scss'

interface DraggableRowProps {
	row: Row<ILanguageResource>
}

export const DraggableRow = ({ row }: DraggableRowProps) => {
	const { transform, transition, setNodeRef, isDragging } = useSortable({
		id: row.original.id
	})

	const style: CSSProperties = {
		transform: CSS.Transform.toString(transform),
		transition: transition,
		opacity: isDragging ? 0.8 : 1,
		zIndex: isDragging ? 1 : 0,
		position: 'relative'
	}

	return (
		<tr ref={setNodeRef} style={style} className={styles.row}>
			{row.getVisibleCells().map(cell => (
				<td key={cell.id} className={styles.cell}>
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</td>
			))}
		</tr>
	)
}
