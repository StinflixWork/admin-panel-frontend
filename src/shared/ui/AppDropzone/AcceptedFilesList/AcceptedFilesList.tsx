import { FileWithPath } from 'react-dropzone'
import { Trash2 } from 'lucide-react'
import styles from './AcceptedFilesList.module.scss'

interface AcceptedFileItemProps {
	files: FileWithPath[]
	handleRemoveFile: (file: FileWithPath) => void
}

export const AcceptedFilesList = ({ files, handleRemoveFile }: AcceptedFileItemProps) => {
	return (
		<ul className={styles.root}>
			{files.map(file => (
				<li key={file.path} className={styles.pictureItem}>
					<p>{file.name}</p>
					<button onClick={() => handleRemoveFile(file)} className={styles.removePictureButton}>
						<Trash2 size={18} />
					</button>
				</li>
			))}
		</ul>
	)
}
