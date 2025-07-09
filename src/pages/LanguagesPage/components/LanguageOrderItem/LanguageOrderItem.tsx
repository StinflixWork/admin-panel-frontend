import { useEffect, useState } from 'react'
import { SharedSelection } from '@heroui/system'
import { ILanguageResource, useUpdateLanguageOrderMutation } from '@/entities/Language'
import { SelectionOptions } from '@/shared/types/common.ts'
import { SelectField } from '@/shared/ui/Fields/SelectField'
import { RotateCcw, Save } from 'lucide-react'
import styles from './LanguageOrderItem.module.scss'

interface LanguageOrderItemProps {
	language: ILanguageResource
	total: number
}

export const LanguageOrderItem = ({ language, total }: LanguageOrderItemProps) => {
	const languageTitle = `${language.name} - ${language.code.toUpperCase()}`
	const options = Array.from({ length: total }, (_, i) => ({
		label: String(i + 1),
		key: i + 1
	}))

	const [languageOrder, setLanguageOrder] = useState<SelectionOptions>(new Set())
	const [isSelected, setIsSelected] = useState<boolean>(false)

	const [updateLanguageOrder, { isLoading }] = useUpdateLanguageOrderMutation()

	const onChangeLanguage = (keys: SharedSelection) => {
		setLanguageOrder(keys)
		setIsSelected(true)
	}

	const onResetLanguage = () => {
		setIsSelected(false)
		setLanguageOrder(new Set([language.order]))
	}

	const onSubmitLanguage = async () => {
		try {
			const order = [...languageOrder][0] as number
			await updateLanguageOrder({ languageId: language.id, order }).unwrap()
			setIsSelected(false)
		} catch (e) {
			console.error(e)
		}
	}

	useEffect(() => {
		setLanguageOrder(new Set([language.order]))
	}, [language])

	return (
		<div className={styles.root}>
			<div>
				<h2>{languageTitle}</h2>
			</div>
			<div className='grid grid-cols-[40%_1fr] items-center gap-x-1.5'>
				<div className='justify-self-end'>
					{isSelected && (
						<div className='flex items-center gap-x-1'>
							<button onClick={onResetLanguage}>
								<RotateCcw size={20} className='text-gray-basic' />
							</button>
							<button
								onClick={onSubmitLanguage}
								disabled={isLoading}
								className='disabled:opacity-50'
							>
								<Save size={20} className='text-gray-basic' />
							</button>
						</div>
					)}
				</div>
				<div className='flex-auto'>
					<SelectField
						selectionMode='single'
						items={options}
						placeholder='Оберіть порядок'
						selectedKeys={languageOrder}
						onSelectionChange={onChangeLanguage}
					/>
				</div>
			</div>
		</div>
	)
}
