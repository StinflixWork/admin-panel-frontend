import { useState } from 'react'
import { useGetClientByIdQuery } from '@/entities/Client'
import { ClientModalEdit } from '@/pages/ClientsPage/components/ClientModal/ClientModalEdit'
import { ClientModalShow } from '../ClientModalShow'
import styles from './ClientModalContent.module.scss'

interface ClientModalContentProps {
	clientId: string
}

export const ClientModalContent = ({ clientId }: ClientModalContentProps) => {
	const [isEdit, setIsEdit] = useState(false)
	const { data, isLoading } = useGetClientByIdQuery({ clientId })

	const handleShowEdit = () => setIsEdit(true)
	const handleCloseEdit = () => setIsEdit(false)

	// Skeleton
	if (isLoading) {
		return <div>Skeleton</div>
	}

	if (!data) {
		return <div>No Data</div>
	}

	return (
		<div className={styles.root}>
			{!isEdit ? (
				<ClientModalShow data={data} onClickEdit={handleShowEdit} />
			) : (
				<ClientModalEdit data={data} onClickEdit={handleCloseEdit} />
			)}
		</div>
	)
}
