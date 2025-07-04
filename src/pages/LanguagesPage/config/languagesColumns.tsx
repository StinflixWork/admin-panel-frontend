import { ILanguageResource } from '@/entities/Language'
import { ColumnDef } from '@tanstack/react-table'

export const languagesColumns: ColumnDef<ILanguageResource>[] = [
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
		header: 'Порядок',
		accessorKey: 'order',
		cell: props => props.getValue()
	},
	{
		header: 'Статус',
		accessorFn: ({ active }) => (active ? 'Активний' : 'Не активний'),
		cell: props => props.getValue()
	}
]
