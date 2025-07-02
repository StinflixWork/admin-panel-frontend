import { IClientResource } from '@/entities/Client/api/clientTypes.ts'
import { ClientsTableActions } from '@/pages/ClientsPage/components/ClientsTableActions'
import { PictureCell } from '@/shared/ui/Table/components'
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
		id: 'actions',
		cell: ({ row }) => <ClientsTableActions clientId={row.original.id} />
	}
]
