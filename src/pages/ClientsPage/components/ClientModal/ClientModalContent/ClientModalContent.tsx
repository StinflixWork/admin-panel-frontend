import { useState } from 'react'
import { useGetClientByIdQuery } from '@/entities/Client'
import { CardSkeleton } from '@/shared/ui/Skeletons'
import { ClientModalEdit } from '../ClientModalEdit'
import { ClientModalShow } from '../ClientModalShow'

interface ClientModalContentProps {
	clientId: string
}

export const ClientModalContent = ({ clientId }: ClientModalContentProps) => {
	const [isEdit, setIsEdit] = useState(false)
	const { data, isLoading } = useGetClientByIdQuery({ clientId })

	const handleShowEdit = () => setIsEdit(true)
	const handleCloseEdit = () => setIsEdit(false)

	if (isLoading) {
		return <CardSkeleton />
	}

	if (!data) {
		return <div>No Data</div>
	}

	return isEdit ? (
		<ClientModalEdit data={data} onClickEdit={handleCloseEdit} />
	) : (
		<ClientModalShow data={data} onClickEdit={handleShowEdit} />
	)
}
