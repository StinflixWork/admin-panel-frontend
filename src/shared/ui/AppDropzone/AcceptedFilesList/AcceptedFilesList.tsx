import { FileWithPath } from 'react-dropzone'
import { AppButton } from '@/shared/ui/AppButton'
import styles from './AcceptedFilesList.module.scss'

interface AcceptedFileItemProps {
	files: FileWithPath[]
	handleRemoveFile: (file: FileWithPath) => void
}

export const AcceptedFilesList = ({ files, handleRemoveFile }: AcceptedFileItemProps) => {
	return (
		<ul className={styles.root}>
			{files.map(file => (
				<li key={file.path}>
					<p>{file.name}</p>
					<AppButton onPress={() => handleRemoveFile(file)}>X</AppButton>
				</li>
			))}
		</ul>
	)
}
