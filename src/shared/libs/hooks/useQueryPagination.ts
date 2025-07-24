import { useSearchParams } from 'react-router'
import { OnChangeFn, PaginationState } from '@tanstack/react-table'

export const useQueryPagination = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const page = Number(searchParams.get('page') || 1)
	const limit = Number(searchParams.get('limit') || 10)

	const pagination: PaginationState = { pageIndex: page, pageSize: limit }

	const onPaginationChange: OnChangeFn<PaginationState> = updater => {
		const newPagination = typeof updater === 'function' ? updater(pagination) : updater

		setSearchParams({
			page: newPagination.pageIndex.toString(),
			limit: newPagination.pageSize.toString()
		})
	}

	return { pagination, setPagination: onPaginationChange }
}
