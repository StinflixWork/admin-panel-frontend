export const AppRoutes = {
	MAIN: '/',
	AUTH: '/auth',
	LOGOUT: '/logout',
	CLIENTS: '/clients',
	LANGUAGES: '/languages',
	NOT_FOUND: '*'
} as const

export type TypeAppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]
