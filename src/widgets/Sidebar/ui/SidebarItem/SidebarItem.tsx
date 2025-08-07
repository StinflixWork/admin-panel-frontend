import { NavLink } from 'react-router'
import { clsx } from 'clsx'
import { TypeSidebar } from '../../types/sidebarTypes.ts'
import styles from './SidebarItem.module.scss'

export const SidebarItem = (props: TypeSidebar) => {
	const { label, href, Icon } = props

	return (
		<NavLink
			to={href}
			className={({ isActive }) => clsx(styles.root, { [styles.active]: isActive })}
		>
			<Icon size={24} />
			<span className={styles.link}>{label}</span>
		</NavLink>
	)
}
