import { PropsWithChildren } from 'react'

export const BasicLayout = ({ children }: PropsWithChildren) => {
	return <main className='h-screen w-full overflow-x-hidden'>{children}</main>
}
