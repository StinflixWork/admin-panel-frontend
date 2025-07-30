import { Input, InputProps } from '@heroui/input'
import styles from './TextField.module.scss'

interface TextFieldProps extends InputProps {
	error?: string
	placeholder?: string
}

export const TextField = (props: TextFieldProps) => {
	const { error, placeholder = 'Введіть значення', ...rest } = props

	return (
		<div className={styles.root}>
			<Input
				radius='sm'
				labelPlacement='outside'
				placeholder={placeholder}
				classNames={{
					label: styles.label,
					inputWrapper: styles.inputWrapper,
					input: styles.input
				}}
				{...rest}
			/>
			{error && <span className={styles.error}>{error}</span>}
		</div>
	)
}
