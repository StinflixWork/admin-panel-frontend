interface InfoFieldProps {
	title: string
	value: string | number | null
}

export const InfoField = ({ title, value }: InfoFieldProps) => {
	return (
		<div className='flex flex-col'>
			<h3 className='text-green-brand text-base font-medium'>{title}</h3>
			<p className='text-lg'>{value}</p>
		</div>
	)
}
