import { PropsWithChildren } from 'react'
import { Sidebar } from '@/widgets/Sidebar'
import styles from './MainLayout.module.scss'

export const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className={styles.root}>
			<Sidebar />
			<main className={styles.content}>{children}</main>
		</div>
	)
}
