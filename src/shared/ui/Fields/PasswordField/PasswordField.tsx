import { useState } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { Input } from '@heroui/input'
import { Eye, EyeOff } from 'lucide-react'

interface PasswordFieldProps<T extends FieldValues> {
	label: Path<T>
	register: UseFormRegister<T>
}

export const PasswordField = <TData extends FieldValues>({
	register,
	label
}: PasswordFieldProps<TData>) => {
	const [isVisible, setIsVisible] = useState(false)
	const toggleVisibility = () => setIsVisible(!isVisible)

	return (
		<Input
			label='Пароль'
			placeholder='Введіть пароль'
			labelPlacement='outside'
			radius='sm'
			type={isVisible ? 'text' : 'password'}
			isRequired
			{...register(label)}
			endContent={
				<button
					aria-label='toggle password visibility'
					type='button'
					onClick={toggleVisibility}
				>
					{isVisible ? (
						<EyeOff className='w-6 text-gray-dark' />
					) : (
						<Eye className='w-6 text-gray-dark' />
					)}
				</button>
			}
		/>
	)
}
