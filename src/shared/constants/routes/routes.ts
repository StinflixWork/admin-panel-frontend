export const AppRoutes = {
	MAIN: '/',
	AUTH: '/auth',
	CLIENTS: '/clients'
} as const

export type TypeAppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]
