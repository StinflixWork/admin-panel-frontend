import { ILanguageResource } from '@/entities/Language'
import { RowDragHandleCell } from '@/features/LanguagesDndTable/components/RowDragHandleCell'
import { EditLanguageModal } from '@/pages/LanguagesPage/components/EditLanguageModal'
import { LanguageDeleteModal } from '@/pages/LanguagesPage/components/LanguageDeleteModal'
import { LanguageHide } from '@/pages/LanguagesPage/components/LanguageHide'
import { ActionsCell } from '@/shared/ui/Table'
import { ColumnDef } from '@tanstack/react-table'

export const languagesColumns: ColumnDef<ILanguageResource>[] = [
	{
		id: 'move',
		cell: ({ row }) => <RowDragHandleCell rowId={row.original.id} />
	},
	{
		header: 'Мова',
		accessorKey: 'name',
		cell: props => props.getValue()
	},
	{
		header: 'Код',
		accessorKey: 'code',
		cell: props => props.getValue()
	},
	{
		header: 'Статус',
		accessorFn: ({ active }) => (active ? 'Активний' : 'Не активний'),
		cell: props => props.getValue()
	},
	{
		id: 'tools',
		cell: ({ row }) => (
			<ActionsCell>
				<EditLanguageModal language={row.original} />
				<LanguageHide languageId={row.original.id} active={row.original.active} />
				<LanguageDeleteModal languageId={row.original.id} />
			</ActionsCell>
		)
	}
]
