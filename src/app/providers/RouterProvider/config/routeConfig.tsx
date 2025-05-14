import { RouteProps } from 'react-router'
import { ClientsPage } from '@/pages'
import { AuthPage } from '@/pages/AuthPage'
import { DashboardPage } from '@/pages/DashboardPage/ui/DashboardPage'
import { TranslationsPage } from '@/pages/TranslationsPage/ui/TranslationsPage'
import { AppRoutes } from '@/shared/constants/routes'


export type TypeRouteConfig = RouteProps & {
	isAuth?: boolean
}

export const routeConfig: TypeRouteConfig[] = [
	{
		path: AppRoutes.AUTH,
		element: <AuthPage />
	},
	{
		path: AppRoutes.MAIN,
		element: <DashboardPage />,
		isAuth: true
	},
	{
		path: AppRoutes.CLIENTS,
		element: <ClientsPage />,
		isAuth: true
	},
	{
		path: AppRoutes.TRANSLATIONS,
		element: <TranslationsPage />,
		isAuth: true
	}
	
]
