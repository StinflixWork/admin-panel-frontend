export const LocalStorageKeys = {
	ACCESS_TOKEN: 'access_token'
} as const

type TypeLocalStorageKeys =
	(typeof LocalStorageKeys)[keyof typeof LocalStorageKeys]

export class LocalStorageService {
	static getItem(key: TypeLocalStorageKeys): string | null {
		return localStorage.getItem(key)
	}

	static setItem(key: TypeLocalStorageKeys, value: string): void {
		localStorage.setItem(key, value)
	}

	static removeItem(key: TypeLocalStorageKeys): void {
		localStorage.removeItem(key)
	}

	static clear(): void {
		localStorage.clear()
	}
}
