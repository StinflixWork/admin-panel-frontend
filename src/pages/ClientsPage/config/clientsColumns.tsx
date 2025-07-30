import { IClientResource } from '@/entities/Client'
import { ClientsTableActions } from '@/pages/ClientsPage/components/ClientsTableActions'
import { StatusBadge } from '@/shared/ui/StatusBadge'
import { PictureCell } from '@/shared/ui/Table'
import { ColumnDef } from '@tanstack/react-table'

export const clientsColumns: ColumnDef<IClientResource>[] = [
	{
		header: 'Аватар',
		accessorKey: 'picture',
		cell: ({ row }) => <PictureCell imageUrl={row.original.picture} />
	},
	{
		header: 'Користувач',
		accessorKey: 'name',
		cell: props => props.getValue()
	},
	{
		header: 'Ідентифікатор',
		accessorKey: 'identifier',
		cell: props => props.getValue()
	},
	{
		header: 'Статус',
		accessorKey: 'active',
		cell: ({ row }) => <StatusBadge value={row.original.active} />
	},
	{
		id: 'actions',
		header: 'Керування',
		cell: ({ row }) => <ClientsTableActions clientId={row.original.id} />
	}
]
