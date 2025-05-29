import { ClientDeleteModal } from '../ClientDeleteModal'
import { ClientModal } from '../ClientModal'
import styles from './ClientsTableActions.module.scss'

interface ClientsTableActionsProps {
	clientId: string
}

export const ClientsTableActions = ({ clientId }: ClientsTableActionsProps) => {
	return (
		<div className={styles.root}>
			<ClientModal clientId={clientId} />
			<ClientDeleteModal clientId={clientId} />
		</div>
	)
}
