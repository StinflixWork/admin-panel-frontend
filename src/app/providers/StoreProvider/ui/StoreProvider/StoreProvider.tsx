import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { storeConfig } from '@/app/providers/StoreProvider/config/storeConfig.ts'

export const StoreProvider = ({ children }: PropsWithChildren) => {
	return <Provider store={storeConfig}>{children}</Provider>
}
