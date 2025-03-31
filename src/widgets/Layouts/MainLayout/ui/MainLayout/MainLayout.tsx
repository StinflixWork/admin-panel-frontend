import { PropsWithChildren } from 'react'
import styles from './MainLayout.module.scss'

export const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className={styles.root}>
			<aside className={styles.sidebar}>Menu</aside>
			<main className={styles.content}>{children}</main>
		</div>
	)
}
