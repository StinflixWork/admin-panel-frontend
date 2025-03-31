import { adminReducer } from '@/entities/Admin/model/adminSlice.ts'
import { api } from '@/shared/api/api.ts'
import { configureStore } from '@reduxjs/toolkit'

export const storeConfig = configureStore({
	reducer: {
		admin: adminReducer,
		[api.reducerPath]: api.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware)
})

export type AppState = ReturnType<typeof storeConfig.getState>
export type AppDispatch = typeof storeConfig.dispatch
