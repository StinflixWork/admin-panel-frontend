import { useEffect, useState } from 'react'
import { ILanguageResource, useUpdateLanguageOrderMutation } from '@/entities/Language'
import {
	DndContext,
	DragEndEvent,
	MouseSensor,
	closestCenter,
	useSensor,
	useSensors
} from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { SortableContext, arraySwap, rectSwappingStrategy } from '@dnd-kit/sortable'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { DraggableRow } from '../../components/DraggableRow'
import styles from './LanguagesDndTable.module.scss'

interface LanguagesDndTableProps {
	data: ILanguageResource[]
	columns: ColumnDef<ILanguageResource>[]
}

const fallbackData: never[] = []

export const LanguagesDndTable = ({ data, columns }: LanguagesDndTableProps) => {
	const [rowsData, setRowsData] = useState<ILanguageResource[]>([])
	const [updateLanguageOrder] = useUpdateLanguageOrderMutation()

	const table = useReactTable({
		data: rowsData ?? fallbackData,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getRowId: originalRow => originalRow.id
	})

	const handleDragEnd = async (event: DragEndEvent) => {
		const { active, over } = event

		if (active && over && active.id !== over.id) {
			const oldIndex = rowsData.findIndex(row => row.id === active.id)
			const newIndex = rowsData.findIndex(row => row.id === over.id)

			try {
				const newSortPosition = arraySwap(rowsData, oldIndex, newIndex)
				setRowsData(newSortPosition)
				await updateLanguageOrder({ languageId: active.id as string, order: newIndex + 1 }).unwrap()
			} catch (e) {
				console.error(e)
				setRowsData(rowsData)
			}
		}
	}

	const sensors = useSensors(useSensor(MouseSensor, {}))

	useEffect(() => {
		setRowsData(data)
	}, [data])

	return (
		<DndContext
			collisionDetection={closestCenter}
			modifiers={[restrictToVerticalAxis]}
			onDragEnd={handleDragEnd}
			sensors={sensors}
		>
			<div className={styles.root}>
				<table className={styles.table}>
					<thead className={styles.header}>
						{table.getHeaderGroups().map(headerGroup => (
							<tr key={headerGroup.id} className={styles.row}>
								{headerGroup.headers.map(header => (
									<th key={header.id} colSpan={header.colSpan} className={styles.cell}>
										{flexRender(header.column.columnDef.header, header.getContext())}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody className={styles.body}>
						<SortableContext items={rowsData} strategy={rectSwappingStrategy}>
							{table.getRowModel().rows.map(row => (
								<DraggableRow key={row.id} row={row} />
							))}
						</SortableContext>
					</tbody>
				</table>
			</div>
		</DndContext>
	)
}
