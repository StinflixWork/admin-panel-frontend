import { AppRoutes } from '@/shared/constants/routes'
import { House, UsersRound } from 'lucide-react'
import { TypeSideBarMenu } from '../types/sidebarTypes.ts'

export const MENU_ITEMS: TypeSideBarMenu[] = [
	{
		id: '1',
		label: 'Дашбоард',
		href: AppRoutes.MAIN,
		Icon: House
	},
	{
		id: '2',
		label: 'Клієнти',
		href: AppRoutes.CLIENTS,
		Icon: UsersRound
	}
]
