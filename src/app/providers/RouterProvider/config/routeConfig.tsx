import { RouteProps } from 'react-router'
import { AuthPage } from '@/pages/AuthPage'
import { DashboardPage } from '@/pages/DashboardPage/ui/DashboardPage'
import { AppRoutes } from '@/shared/constants/routes'

export type TypeRouteConfig = RouteProps & {
	auth?: boolean
}

export const routeConfig: TypeRouteConfig[] = [
	{
		path: AppRoutes.AUTH,
		element: <AuthPage />
	},
	{
		path: AppRoutes.MAIN,
		element: <DashboardPage />,
		auth: true
	}
]
