import { Pagination } from '@heroui/react'
import { OnChangeFn, PaginationState } from '@tanstack/react-table'

interface TableFooterProps {
	total: number
	pagination: PaginationState
	setPagination: OnChangeFn<PaginationState>
}

export const TableFooter = ({ total, pagination, setPagination }: TableFooterProps) => {
	return (
		<div className='mt-2.5 flex justify-center py-1'>
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
