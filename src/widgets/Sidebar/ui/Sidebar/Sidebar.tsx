import { AppRoutes } from '@/shared/constants/routes'
import { MENU_ITEMS } from '@/widgets/Sidebar/config/menu.ts'
import { LogOut } from 'lucide-react'
import { SidebarItem } from '../SidebarItem'

export const Sidebar = () => {
	return (
		<div className='w-sidebar shadow-blue-light flex h-full flex-col gap-y-10 bg-white px-7 py-9'>
			<div className='flex items-center gap-x-2'>
				<img src='/favicon.svg' alt='logo' className='h-7 w-7' />
				<h1 className='text-gray-dark text-3xl font-semibold'>OneTouch</h1>
			</div>
			<nav className='flex h-full flex-col'>
				<ul className='flex flex-auto flex-col gap-y-4'>
					{MENU_ITEMS.map(({ id, ...otherProps }) => (
						<li key={id}>
							<SidebarItem {...otherProps} />
						</li>
					))}
				</ul>
				<SidebarItem label='Вийти з системи' Icon={LogOut} href={AppRoutes.LOGOUT} />
			</nav>
		</div>
	)
}
