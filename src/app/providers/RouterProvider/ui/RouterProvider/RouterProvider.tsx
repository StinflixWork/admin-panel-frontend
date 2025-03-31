import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router'
import { RequireAuth } from '@/app/providers/RouterProvider/ui/RequireAuth'
import { AppRoutes, TypeAppRoutes } from '@/shared/constants/routes/routes.ts'
import { BasicLayout } from '@/widgets/Layouts/BasicLayout'
import { MainLayout } from '@/widgets/Layouts/MainLayout'
import { TypeRouteConfig, routeConfig } from '../../config/routeConfig.tsx'

export const RouterProvider = () => {
	const routesWithLayout = useCallback((route: TypeRouteConfig) => {
		let Layout = MainLayout

		const basicRoutes: TypeAppRoutes[] = [AppRoutes.AUTH]

		if (basicRoutes.includes(route.path as TypeAppRoutes)) {
			Layout = BasicLayout
		}

		const element = (
			<Layout>
				<Suspense>{route.element}</Suspense>
			</Layout>
		)

		return (
			<Route
				key={route.path}
				path={route.path}
				element={route.auth ? <RequireAuth>{element}</RequireAuth> : element}
			/>
		)
	}, [])

	return <Routes>{routeConfig.map(routesWithLayout)}</Routes>
}
