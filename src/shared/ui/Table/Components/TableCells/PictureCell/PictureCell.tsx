import ImagePlaceholder from '@images/image-placeholder.webp'
import styles from './PictureCell.module.scss'

interface PictureCellProps {
	imageUrl: string | null
	altText?: string
}

export const PictureCell = ({ imageUrl, altText = 'picture' }: PictureCellProps) => {
	const isEmpty = imageUrl === null || imageUrl === ''

	return (
		<div className={styles.root}>
			<img src={!isEmpty ? imageUrl : ImagePlaceholder} alt={altText} />
		</div>
	)
}
