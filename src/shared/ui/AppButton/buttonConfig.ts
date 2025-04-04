export const ButtonVariants = {
	SOLID: 'solid',
	OUTLINE: 'outline'
} as const

export const ButtonColors = {
	PRIMARY: 'primary',
	DANGER: 'danger'
} as const

export type TypeButtonVariants =
	(typeof ButtonVariants)[keyof typeof ButtonVariants]
export type TypeButtonColors = (typeof ButtonColors)[keyof typeof ButtonColors]
