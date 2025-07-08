import isEqual from 'lodash.isequal'
import { typedEntries } from './typedEntries'

export const getChangedFields = <T extends object>(original: T, source: T): Partial<T> => {
	const changedFields: Partial<T> = {}

	typedEntries(source).forEach(([key, value]) => {
		const originalValue = original[key]

		if (!(key in original)) {
			changedFields[key] = value
			return
		}

		if (Array.isArray(value) && Array.isArray(originalValue)) {
			if (!isEqual(value, originalValue)) {
				changedFields[key] = value
			}
			return
		}

		if (
			typeof value === 'object' &&
			value !== null &&
			originalValue !== null &&
			!Array.isArray(value) &&
			!Array.isArray(originalValue)
		) {
			const nestedDiff = getChangedFields(
				originalValue as Record<string, unknown>,
				value as Record<string, unknown>
			)

			if (Object.keys(nestedDiff).length > 0) {
				changedFields[key] = nestedDiff as T[keyof T]
			}

			return
		}

		if (!isEqual(value, originalValue)) {
			changedFields[key] = value
		}
	})

	return changedFields
}
