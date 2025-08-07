import { useState } from 'react'
import { InputProps } from '@heroui/react'
import { Eye, EyeOff } from 'lucide-react'
import { TextField } from '../TextField'
import styles from './PasswordField.module.scss'

interface PasswordFieldProps extends Omit<InputProps, 'label' | 'placeholder'> {
	error?: string
}

export const PasswordField = (props: PasswordFieldProps) => {
	const [isVisible, setIsVisible] = useState(false)
	const toggleVisibility = () => setIsVisible(!isVisible)

	return (
		<TextField
			label='Пароль'
			placeholder='Введіть пароль'
			type={isVisible ? 'text' : 'password'}
			autoComplete='new-password'
			endContent={
				<button aria-label='toggle password visibility' type='button' onClick={toggleVisibility}>
					{isVisible ? (
						<EyeOff className={styles.hiddenIcon} />
					) : (
						<Eye className={styles.hiddenIcon} />
					)}
				</button>
			}
			{...props}
		/>
	)
}
