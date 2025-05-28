export const isEmpty = (value: unknown) => {
	if (typeof value === 'number') return false

	return value === null || value === undefined || value === ''
}
