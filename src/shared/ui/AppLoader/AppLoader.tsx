import { Trio } from 'ldrs/react'
import 'ldrs/react/Trio.css'

export const AppLoader = () => {
	return (
		<section className='h-screen grid place-items-center'>
			<Trio size={40} speed={1.3} color='#058A8A' />
		</section>
	)
}
