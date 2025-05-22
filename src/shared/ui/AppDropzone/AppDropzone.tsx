import { ReactElement, useCallback, useState } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'
import { AcceptedFilesList } from './AcceptedFilesList'
import styles from './AppDropzone.module.scss'

interface DropzoneProps {
	children: ReactElement
	setFileList: (files: File[]) => void
}

export const AppDropzone = (props: DropzoneProps) => {
	const { children, setFileList } = props
	const [files, setFiles] = useState<FileWithPath[]>([])

	const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
		setFileList(acceptedFiles)
		setFiles(acceptedFiles)
	}, [])

	const handleRemoveFile = (file: FileWithPath) => {
		const filteredFiles = files.filter(acceptedFile => acceptedFile.name !== file.name)
		setFiles(filteredFiles)
		setFileList(filteredFiles)
	}

	const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1, multiple: false })

	return (
		<div className={styles.root}>
			<div {...getRootProps({ className: styles.dropzone })}>
				<input type='file' {...getInputProps()} />
				{children}
			</div>
			<AcceptedFilesList files={files} handleRemoveFile={handleRemoveFile} />
		</div>
	)
}
