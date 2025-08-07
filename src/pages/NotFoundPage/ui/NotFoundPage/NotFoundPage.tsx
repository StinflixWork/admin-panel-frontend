import { Link } from 'react-router'
import { AppRoutes } from '@/shared/constants/routes'

const NotFoundPage = () => {
	return (
		<section className='grid h-screen w-full place-items-center'>
			<div className='text-center'>
				<h1 className='text-primary mb-2 text-5xl font-semibold'>404 — Сторінку не знайдено...</h1>
				<h2 className='text-gray-dark mb-6 text-lg'>
					Можливо, цієї сторінки не існує, або вона була видалена кимось дуже хоробрим із команди 🤔
				</h2>
				<Link
					to={AppRoutes.MAIN}
					className='text-gray-dark hover:text-gray-dark/75 text-base font-medium underline underline-offset-4 transition-colors'
					replace
				>
					Повернутися на головну
				</Link>
			</div>
		</section>
	)
}

export default NotFoundPage
