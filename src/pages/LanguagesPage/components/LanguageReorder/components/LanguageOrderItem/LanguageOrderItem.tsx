import { ILanguageResource } from '@/entities/Language'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical } from 'lucide-react'
import styles from './LanguageOrderItem.module.scss'

interface LanguageOrderItemProps {
	language: ILanguageResource
}

export const LanguageOrderItem = ({ language }: LanguageOrderItemProps) => {
	const languageTitle = `${language.name} - ${language.code.toUpperCase()}`

	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id: language.id
	})

	const style = {
		transform: CSS.Transform.toString(transform),
		transition
	}

	return (
		<div className={styles.root} style={style}>
			<div className={styles.title}>
				<h2>{languageTitle}</h2>
			</div>
			<div
				ref={setNodeRef}
				{...listeners}
				{...attributes}
				className={isDragging ? 'cursor-grabbing' : 'cursor-grab'}
			>
				<GripVertical />
			</div>
		</div>
	)
}
