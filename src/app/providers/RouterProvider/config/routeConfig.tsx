import { RouteProps } from 'react-router'
import { ClientsPage, LanguagesPage, LogoutPage, NotFoundPage } from '@/pages'
import { AuthPage } from '@/pages/AuthPage'
import { DashboardPage } from '@/pages/DashboardPage/ui/DashboardPage'
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
		path: AppRoutes.LOGOUT,
		element: <LogoutPage />,
		isAuth: true
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
		path: AppRoutes.LANGUAGES,
		element: <LanguagesPage />,
		isAuth: true
	},
	{
		path: AppRoutes.NOT_FOUND,
		element: <NotFoundPage />
	}
]
