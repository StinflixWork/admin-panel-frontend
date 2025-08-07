import ImagePlaceholder from '@images/image-placeholder.png'

interface PictureCellProps {
	imageUrl: string | null
	altText?: string
}

export const PictureCell = ({ imageUrl, altText = 'picture' }: PictureCellProps) => {
	const isEmpty = imageUrl === null || imageUrl === ''

	return (
		<div className='h-16 w-16 overflow-hidden rounded'>
			<img
				src={!isEmpty ? imageUrl : ImagePlaceholder}
				alt={altText}
				className='h-full w-full object-cover'
			/>
		</div>
	)
}
