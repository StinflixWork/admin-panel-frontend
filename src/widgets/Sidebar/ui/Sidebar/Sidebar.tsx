import { Logout } from '@/features/Logout'
import { MENU_ITEMS } from '@/widgets/Sidebar/config/menu.ts'
import { SidebarItem } from '../SidebarItem'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
	return (
		<div className={styles.root}>
			<h1 className={styles.logo}>OneTouch</h1>
			<nav className={styles.menu}>
				<ul className={styles.list}>
					{MENU_ITEMS.map(({ id, ...otherProps }) => (
						<li key={id}>
							<SidebarItem {...otherProps} />
						</li>
					))}
				</ul>
				<Logout />
			</nav>
		</div>
	)
}
