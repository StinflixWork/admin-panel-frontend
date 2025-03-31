export const AppRoutes = {
	MAIN: '/',
	AUTH: '/auth'
} as const

export type TypeAppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]
