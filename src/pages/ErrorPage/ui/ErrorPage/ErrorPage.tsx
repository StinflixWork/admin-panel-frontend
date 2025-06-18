import styles from './ErrorPage.module.scss'

const ErrorPage = () => {
	return (
		<section className={styles.root}>
			<p className={styles.title}>При загрузці даних, сталась помилка</p>
		</section>
	)
}

export default ErrorPage
