import { Skeleton } from '@heroui/skeleton'

export const CardSkeleton = () => {
	return (
		<div className='w-full flex flex-col gap-y-6'>
			<Skeleton className='rounded-lg'>
				<div className='h-40 rounded-lg bg-default-300' />
			</Skeleton>
			<div className='w-full flex flex-col gap-y-3'>
				<Skeleton className='w-3/5 rounded-lg'>
					<div className='h-3 w-3/5 rounded-lg bg-default-200' />
				</Skeleton>
				<Skeleton className='w-4/5 rounded-lg'>
					<div className='h-3 w-4/5 rounded-lg bg-default-200' />
				</Skeleton>
				<Skeleton className='w-2/5 rounded-lg'>
					<div className='h-3 w-2/5 rounded-lg bg-default-300' />
				</Skeleton>
			</div>
		</div>
	)
}
