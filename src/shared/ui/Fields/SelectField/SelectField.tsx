import { Select, SelectItem, SelectProps } from '@heroui/select'

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
		<div className='flex flex-col gap-y-1'>
			<Select
				radius='sm'
				placeholder={placeholder}
				labelPlacement='outside'
				items={items}
				{...rest}
			>
				{items => <SelectItem>{items.label}</SelectItem>}
			</Select>
			{error && <span className='text-red-basic text-xs'>{error}</span>}
		</div>
	)
}
