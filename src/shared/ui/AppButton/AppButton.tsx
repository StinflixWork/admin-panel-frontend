import { Button, ButtonProps } from '@heroui/react'
import { clsx } from 'clsx'
import styles from './AppButton.module.scss'
import {
	ButtonColors,
	ButtonVariants,
	TypeButtonColors,
	TypeButtonVariants
} from './buttonConfig.ts'

interface AppButtonProps extends Omit<ButtonProps, 'variant' | 'color'> {
	className?: string
	variant?: TypeButtonVariants
	color?: TypeButtonColors
}

export const AppButton = (props: AppButtonProps) => {
	const {
		className,
		color = ButtonColors.PRIMARY,
		variant = ButtonVariants.SOLID,
		children,
		...buttonProps
	} = props

	return (
		<Button
			radius='sm'
			className={clsx(styles.root, styles[variant], styles[color], className)}
			{...buttonProps}
		>
			{children}
		</Button>
	)
}
