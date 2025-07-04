import { IClientResource } from '@/entities/Client'
import { AppButton } from '@/shared/ui/AppButton'
import { InfoField } from '@/shared/ui/Fields/InfoField'
import { ClientAvatar } from '../../ClientAvatar'
import styles from './ClientModalShow.module.scss'

interface ClientModalShowProps {
	data: IClientResource
	onClickEdit: () => void
}

export const ClientModalShow = ({ data, onClickEdit }: ClientModalShowProps) => {
	return (
		<div className={styles.root}>
			<ClientAvatar clientId={data.id} picture={data.picture} />
			<InfoField title='Назва CRM системи' value={data.name} />
			<InfoField title='СУБД' value={data.connection.connection} />
			<InfoField title='Назва БД' value={data.connection.database} />
			<InfoField title='Хост' value={data.connection.host} />
			<InfoField title='Порт' value={data.connection.port} />
			<AppButton onPress={onClickEdit}>Редагувати</AppButton>
		</div>
	)
}
