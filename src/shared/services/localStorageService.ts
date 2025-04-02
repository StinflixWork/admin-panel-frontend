type LocalStorageKeys = 'access_token'

export class LocalStorageService {
	static getItem(key: LocalStorageKeys): string | null {
		return localStorage.getItem(key)
	}

	static setItem(key: LocalStorageKeys, value: string): void {
		localStorage.setItem(key, value)
	}

	static removeItem(key: LocalStorageKeys): void {
		localStorage.removeItem(key)
	}

	static clear(): void {
		localStorage.clear()
	}
}
