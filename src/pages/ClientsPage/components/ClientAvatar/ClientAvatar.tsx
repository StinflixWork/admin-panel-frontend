import { addToast } from '@heroui/toast'
import { useDeleteClientAvatarByIdMutation } from '@/entities/Client'
import ImagePlaceholder from '@images/image-placeholder.png'
import { Trash2 } from 'lucide-react'
import styles from './ClientAvatar.module.scss'

interface ClientAvatarProps {
	clientId: string
	picture: string | null
}

export const ClientAvatar = ({ clientId, picture }: ClientAvatarProps) => {
	const [deleteAvatar] = useDeleteClientAvatarByIdMutation()

	const handleDeleteAvatar = async () => {
		try {
			await deleteAvatar(clientId).unwrap()
			addToast({
				title: 'Аватар успішно видалено',
				variant: 'solid',
				color: 'primary'
			})
		} catch (e) {
			console.error(e)
			addToast({
				title: 'Під час видалення аватару сталася помилка',
				variant: 'solid',
				color: 'danger'
			})
		}
	}

	return (
		<div className={styles.root}>
			<img src={picture ? picture : ImagePlaceholder} className={styles.avatar} alt='avatar' />
			{picture && (
				<button className={styles.deleteButton} onClick={handleDeleteAvatar}>
					<Trash2 />
				</button>
			)}
		</div>
	)
}
