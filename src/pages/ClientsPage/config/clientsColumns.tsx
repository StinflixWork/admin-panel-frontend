import { IClientResource } from '@/entities/Client'
import { StatusBadge } from '@/shared/ui/StatusBadge'
import { ActionsCell, PictureCell } from '@/shared/ui/Table'
import { ColumnDef } from '@tanstack/react-table'
import { ClientDeleteModal } from '../components/ClientDeleteModal'
import { ClientModal } from '../components/ClientModal'

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
		cell: ({ row }) => (
			<ActionsCell>
				<ClientModal clientId={row.original.id} />
				<ClientDeleteModal clientId={row.original.id} />
			</ActionsCell>
		)
	}
]
