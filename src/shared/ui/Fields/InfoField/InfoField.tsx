import styles from './InfoField.module.scss'

interface InfoFieldProps {
	title: string
	value: string | number | null
}

export const InfoField = ({ title, value }: InfoFieldProps) => {
	return (
		<div className={styles.root}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.value}>{value}</p>
		</div>
	)
}
