import { useState } from 'react'
import { ILanguageResource, useUpdateLanguageOrderMutation } from '@/entities/Language'
import {
	DndContext,
	DragEndEvent,
	MouseSensor,
	PointerSensor,
	closestCenter,
	useDroppable,
	useSensor,
	useSensors
} from '@dnd-kit/core'
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { LanguageOrderItem } from '../../components/LanguageOrderItem'
import styles from './LanguageReorder.module.scss'

interface LanguageReorderProps {
	languages: ILanguageResource[]
}

export const LanguageReorder = ({ languages }: LanguageReorderProps) => {
	const [langItems, setLangItems] = useState<ILanguageResource[]>(languages)
	const sensors = useSensors(useSensor(MouseSensor), useSensor(PointerSensor))
	const { setNodeRef } = useDroppable({ id: 'languageReorderDroppable' })

	const [updateLanguageOrder] = useUpdateLanguageOrderMutation()

	const handleDragEnd = async (event: DragEndEvent) => {
		const { active, over } = event

		if (!over) return

		if (active.id !== over.id) {
			const oldIndex = langItems.findIndex(lang => lang.id === active.id)
			const newIndex = langItems.findIndex(lang => lang.id === over.id)

			try {
				const newSortPosition = arrayMove(langItems, oldIndex, newIndex)
				setLangItems(newSortPosition)
				await updateLanguageOrder({ languageId: active.id as string, order: newIndex + 1 }).unwrap()
			} catch (e) {
				console.error(e)
				setLangItems(languages)
			}
		}
	}

	return (
		<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
			<div className={styles.root} ref={setNodeRef}>
				<SortableContext items={langItems} strategy={verticalListSortingStrategy}>
					{langItems.map(language => (
						<LanguageOrderItem key={language.id} language={language} />
					))}
				</SortableContext>
			</div>
		</DndContext>
	)
}
