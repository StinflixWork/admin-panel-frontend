import { ReactElement, useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from './AppDropzone.module.scss'

interface DropzoneProps {
	children: ReactElement
	fileList: File[] | null
	setFileList: (files: File[]) => void
	initialPreviewPicture?: string | null
}

export const AppDropzone = ({
	children,
	fileList,
	setFileList,
	initialPreviewPicture
}: DropzoneProps) => {
	const [preview, setPreview] = useState<string | null>(initialPreviewPicture || null)

	const onDrop = useCallback((acceptedFiles: File[]) => {
		setFileList(acceptedFiles)
	}, [])

	const { getRootProps, getInputProps } = useDropzone({ onDrop })

	useEffect(() => {
		if (!fileList) return

		const previewUrl = URL.createObjectURL(fileList[0])
		setPreview(previewUrl)

		return () => {
			URL.revokeObjectURL(previewUrl)
		}
	}, [fileList])

	return (
		<div {...getRootProps({ className: styles.root })}>
			<input type='file' {...getInputProps()} />
			{children}
			{preview && (
				<div className={styles.previewImage}>
					<img src={preview} alt='preview' />
				</div>
			)}
		</div>
	)
}
