import { IClientResource } from '@/entities/Client/api/clientTypes.ts'
import { AppButton } from '@/shared/ui/AppButton'
import { InfoField } from '@/shared/ui/Fields'
import ImagePlaceholder from '@images/image-placeholder.png'
import styles from './ClientModalShow.module.scss'

interface ClientModalShowProps {
	data: IClientResource
	onClickEdit: () => void
}

export const ClientModalShow = ({ data, onClickEdit }: ClientModalShowProps) => {
	return (
		<div className={styles.root}>
			<div className={styles.avatar}>
				<img src={data.picture ? data.picture : ImagePlaceholder} alt='' />
			</div>
			<InfoField title='Назва CRM системи' value={data.name} />
			<InfoField title='СУБД' value={data.connection.connection} />
			<InfoField title='Назва БД' value={data.connection.database} />
			<InfoField title='Хост' value={data.connection.host} />
			<InfoField title='Порт' value={data.connection.port} />
			<AppButton onPress={onClickEdit}>Редагувати</AppButton>
		</div>
	)
}
