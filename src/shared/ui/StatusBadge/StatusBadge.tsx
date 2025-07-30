import { clsx } from 'clsx'
import styles from './StatusBadge.module.scss'

interface StatusBadgeProps {
	value: number | boolean
}

export const StatusBadge = ({ value }: StatusBadgeProps) => {
	const isActive = typeof value === 'boolean' ? value : !value

	return (
		<div className={clsx(styles.root, { [styles.active]: isActive })}>
			{isActive ? 'Активний' : 'Не активний'}
		</div>
	)
}
