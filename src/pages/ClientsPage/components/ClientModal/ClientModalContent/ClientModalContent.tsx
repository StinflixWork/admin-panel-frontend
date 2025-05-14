import { useGetClientByIdQuery } from '@/entities/Client'
import styles from './ClientModalContent.module.scss'

interface ClientModalContentProps {
	clientId: string
}

export const ClientModalContent = ({ clientId }: ClientModalContentProps) => {
	const { data } = useGetClientByIdQuery({ clientId })

	return (
		<div className={styles.root}>
			<div>
				<h3>Загальна інформація</h3>
				<p>{data?.name}</p>
			</div>
		</div>
	)
}
