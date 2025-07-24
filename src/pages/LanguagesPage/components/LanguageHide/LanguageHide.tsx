import { useToggleActiveLanguageMutation } from '@/entities/Language'
import { Eye, EyeOff } from 'lucide-react'

interface LanguageHideProps {
	languageId: string
	active: boolean
}

export const LanguageHide = ({ languageId, active }: LanguageHideProps) => {
	const [toggleStatusLanguage] = useToggleActiveLanguageMutation()

	const handleToggleStatusLanguage = async () => {
		try {
			await toggleStatusLanguage({ languageId, active: +!active })
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<button
			onClick={handleToggleStatusLanguage}
			className='rounded p-1 transition-colors hover:bg-gray-light'
		>
			{active ? (
				<Eye className='text-green-brand' size={24} />
			) : (
				<EyeOff className='text-green-brand' size={24} />
			)}
		</button>
	)
}
