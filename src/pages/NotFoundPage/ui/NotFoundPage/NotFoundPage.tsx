import { Link } from 'react-router'
import { AppRoutes } from '@/shared/constants/routes'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
	return (
		<section className={styles.root}>
			<div className={styles.content}>
				<h1 className={styles.title}>404 — Сторінку не знайдено...</h1>
				<h2 className={styles.subtitle}>
					Можливо, цієї сторінки не існує, або вона була видалена кимось дуже хоробрим із команди 🤔
				</h2>
				<Link to={AppRoutes.MAIN} className={styles.link} replace>
					Повернутися на головну
				</Link>
			</div>
		</section>
	)
}

export default NotFoundPage
