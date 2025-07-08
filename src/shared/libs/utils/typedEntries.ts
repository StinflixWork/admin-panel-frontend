// утіліта якщо потрібно типізувати Object.entries який приймає в себе дженерік
export function typedEntries<T extends object>(obj: T): [keyof T, T[keyof T]][] {
	return Object.entries(obj) as [keyof T, T[keyof T]][]
}
