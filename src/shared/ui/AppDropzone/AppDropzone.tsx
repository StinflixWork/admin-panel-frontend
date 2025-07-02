import { useCallback, useEffect, useState } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'
import { Trash2, UploadCloud } from 'lucide-react'
import styles from './AppDropzone.module.scss'

interface DropzoneProps {
	picture: string | null
	setFile: (file: File | null) => void
}

const MAX_SIZE = 5 * 1024 * 1024

export const AppDropzone = ({ picture, setFile }: DropzoneProps) => {
	const [preview, setPreview] = useState<string | null>(picture)
	const [error, setError] = useState<string | null>(null)
	const [isUploadNewFile, setIsUploadNewFile] = useState<boolean>(false)

	useEffect(() => {
		setPreview(picture)
	}, [picture])

	useEffect(() => {
		return () => {
			if (preview?.startsWith('blob:')) {
				URL.revokeObjectURL(preview)
			}
		}
	}, [preview])

	const handleRemoveImage = () => {
		if (preview?.startsWith('blob:')) {
			URL.revokeObjectURL(preview)
		}

		setIsUploadNewFile(false)
		setPreview(picture ? picture : null)
		setFile(null)
		setError(null)
	}

	const onDrop = useCallback(
		(acceptedFiles: FileWithPath[]) => {
			setIsUploadNewFile(true)
			const file = acceptedFiles[0]

			if (file.size > MAX_SIZE) {
				setError('Розмір файлу перевищує 5 МБ.')
				return
			}

			const previewFile = URL.createObjectURL(file)

			if (preview?.startsWith('blob:')) {
				URL.revokeObjectURL(preview)
			}

			setPreview(previewFile)
			setFile(file)
			setError(null)
		},
		[preview, setFile]
	)

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		multiple: false,
		accept: {
			'image/jpeg': [],
			'image/png': [],
			'image/webp': [],
			'image/jpg': []
		},
		maxFiles: 1,
		maxSize: MAX_SIZE
	})

	return (
		<div className='flex flex-col gap-y-1'>
			<div {...getRootProps({ className: styles.root })}>
				<input {...getInputProps()} />
				<div className={styles.dropzone}>
					<div className={styles.icon}>
						<UploadCloud />
					</div>
					<div className='text-center'>
						<p className='text-sm text-primary font-medium'>Натисніть, щоб завантажити</p>
						<p className='text-sm text-[#667085]'>або перетягніть</p>
						<p className='text-[12px] text-[#667085]'>JPG, PNG (max. 344x194px)</p>
					</div>
				</div>
				{preview && (
					<div className={styles.preview}>
						<img src={preview} className='w-full h-full object-cover' alt='preview' />
					</div>
				)}
			</div>
			{isUploadNewFile && (
				<button onClick={handleRemoveImage} className='self-end text-danger'>
					<Trash2 />
				</button>
			)}
			{error && <p className='text-sm text-red-500 mt-2'>{error}</p>}
		</div>
	)
}
