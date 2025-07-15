import { useSortable } from '@dnd-kit/sortable'
import { GripVertical } from 'lucide-react'

interface RowDragHandleCellProps {
	rowId: string
}

export const RowDragHandleCell = ({ rowId }: RowDragHandleCellProps) => {
	const { attributes, listeners, isDragging } = useSortable({ id: rowId })

	return (
		<button
			className={isDragging ? 'cursor-grabbing' : 'cursor-grab'}
			{...attributes}
			{...listeners}
		>
			<GripVertical />
		</button>
	)
}
