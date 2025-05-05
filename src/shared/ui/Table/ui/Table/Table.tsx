import styles from './Table.module.scss'

interface TableProps {
	className?: string
}

export const Table = (props: TableProps) => {
	return <div className={styles.root}></div>
}
