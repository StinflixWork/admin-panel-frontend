import { PropsWithChildren } from 'react'

export const ActionsCell = ({ children }: PropsWithChildren) => {
	return <div className='flex items-center gap-x-2'>{children}</div>
}
