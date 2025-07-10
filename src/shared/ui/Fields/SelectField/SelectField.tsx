import { Select, SelectItem, SelectProps } from '@heroui/select'
import styles from './SelectField.module.scss'

type SelectOptionType = {
	key: string | number
	label: string
}

interface SelectFieldProps extends Omit<SelectProps, 'children' | 'items'> {
	error?: string
	items: SelectOptionType[]
}

export const SelectField = (props: SelectFieldProps) => {
	const { error, placeholder = 'Оберіть значення', items = [], ...rest } = props

	return (
		<div className={styles.root}>
			<Select
				radius='sm'
				placeholder={placeholder}
				labelPlacement='outside'
				items={items}
				{...rest}
			>
				{items => <SelectItem>{items.label}</SelectItem>}
			</Select>
			{error && <span className={styles.error}>{error}</span>}
		</div>
	)
}
