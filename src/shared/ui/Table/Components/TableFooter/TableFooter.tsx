import { Pagination } from '@heroui/pagination'
import { OnChangeFn, PaginationState } from '@tanstack/react-table'
import styles from './TableFooter.module.scss'

interface TableFooterProps {
	total: number
	pagination: PaginationState
	setPagination: OnChangeFn<PaginationState>
}

export const TableFooter = ({ total, pagination, setPagination }: TableFooterProps) => {
	return (
		<div className={styles.root}>
			<Pagination
				size='sm'
				total={total}
				page={pagination.pageIndex}
				onChange={page => setPagination({ ...pagination, pageIndex: page })}
				showControls
			/>
		</div>
	)
}
