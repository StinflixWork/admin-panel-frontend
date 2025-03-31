import { PropsWithChildren } from 'react'
import styles from './BasicLayout.module.scss'

export const BasicLayout = ({ children }: PropsWithChildren) => {
	return <main className={styles.root}>{children}</main>
}
