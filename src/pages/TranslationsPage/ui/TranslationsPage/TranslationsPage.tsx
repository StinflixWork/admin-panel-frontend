import { useState } from 'react'
import { useGetTranslationsQuery } from '@/entities/Translations/api/translationsApi.ts'
import { AppLoader } from '@/shared/ui/AppLoader'
import styles from './TranslationsPage.module.scss'

export const TranslationsPage = () => {
	const [pagination, setPagination] = useState({ pageIndex: 1, pageSize: 1 })
	const { data, isLoading } = useGetTranslationsQuery()

	if (isLoading) {
		return <AppLoader />
	}

	return (
		<div className={styles.root}>
			<h1>Translations Page</h1>
			{data?.data.map(translation => (
				<div key={translation.key}>
					<h2>{translation.key}</h2>
					<ul>
						{Object.entries(translation.translations).map(([locale, value]) => (
							<li key={locale}>
								{locale}: {value}
							</li>
						))}
					</ul>
					<br />
				</div>
			))}
		</div>
	)
}
