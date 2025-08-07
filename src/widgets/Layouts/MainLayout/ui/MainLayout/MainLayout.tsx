import { PropsWithChildren } from 'react'
import { Sidebar } from '@/widgets/Sidebar'

export const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className='flex h-screen'>
			<Sidebar />
			<main className='flex-auto overflow-x-hidden px-12 py-6'>{children}</main>
		</div>
	)
}
