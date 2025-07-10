import { PropsWithChildren } from 'react'
import styles from './ActionsCell.module.scss'

export const ActionsCell = ({ children }: PropsWithChildren) => {
	return <div className={styles.root}>{children}</div>
}
