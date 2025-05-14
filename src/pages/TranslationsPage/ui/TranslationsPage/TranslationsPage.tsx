import { useState } from 'react'
import { Accordion, AccordionItem } from '@heroui/accordion'
import { Button } from '@heroui/button'
import { Input, Textarea} from '@heroui/input'
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
			<Input label='Search' type='text' />
			<Accordion isCompact>
				{data?.data.map(e => (
					<AccordionItem title={e.key} key={e.key}>
						<Input label='key' type='text' value={e.key} />
						<br />
						<table className={styles.translationTable}>
							<thead>
								<tr>
									<th>Language</th>
									<th>Translation</th>
								</tr>
							</thead>
							<tbody>
								{Object.entries(e.translations).map(([lang, text]) => (
									<tr key={lang}>
										<td>{lang}</td>
										<td>	<Textarea type='text' value={text} /></td>
									</tr>
								))}
							</tbody>
						</table>
						<br />
						<Button color='danger'>Delete</Button>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	)
}
