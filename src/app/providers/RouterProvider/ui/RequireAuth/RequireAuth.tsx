import { PropsWithChildren } from 'react'

// для ролей
export const RequireAuth = ({ children }: PropsWithChildren) => {
	return <div>{children}</div>
}
