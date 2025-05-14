export const AppRoutes = {
	MAIN: '/',
	AUTH: '/auth',
	CLIENTS: '/clients',
	TRANSLATIONS: '/translations',
	NOT_FOUND: '*',
	
} as const

export type TypeAppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]
