import { AppRoutes } from '@/shared/constants/routes'
import { MENU_ITEMS } from '@/widgets/Sidebar/config/menu.ts'
import { LogOut } from 'lucide-react'
import { SidebarItem } from '../SidebarItem'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
	return (
		<div className={styles.root}>
			<div className={styles.logo}>
				<img src='/favicon.svg' alt='logo' className={styles.logoImg} />
				<h1 className={styles.logoTitle}>OneTouch</h1>
			</div>
			<nav className={styles.menu}>
				<ul className={styles.list}>
					{MENU_ITEMS.map(({ id, ...otherProps }) => (
						<li key={id}>
							<SidebarItem {...otherProps} />
						</li>
					))}
				</ul>
				<SidebarItem label='Вийти з системи' Icon={LogOut} href={AppRoutes.LOGOUT} />
			</nav>
		</div>
	)
}
