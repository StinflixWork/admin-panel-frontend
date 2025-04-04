import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const adminSlice = createSlice({
	name: 'admin',
	initialState: {
		isAuth: false,
		admin: null
	},
	reducers: {
		setIsAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
		logout: state => {
			state.isAuth = false
			state.admin = null
		}
	}
})

export const { actions: adminActions } = adminSlice
export const { reducer: adminReducer } = adminSlice
