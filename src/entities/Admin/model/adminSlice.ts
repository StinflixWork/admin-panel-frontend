import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAdminSchema } from './adminSchema.ts'

const initialState: IAdminSchema = {
	accessToken: null,
	isAuthInitialized: false
}

const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		setAccessToken: (state, action: PayloadAction<string>) => {
			state.accessToken = action.payload
		},
		setAuthInitialized: (state, action) => {
			state.isAuthInitialized = action.payload
		},
		logout: state => {
			state.accessToken = null
			state.isAuthInitialized = false
		}
	}
})

export const { actions: adminActions } = adminSlice
export const { reducer: adminReducer } = adminSlice
