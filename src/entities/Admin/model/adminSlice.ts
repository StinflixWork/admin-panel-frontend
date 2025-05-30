import { REMEMBER_ME } from '@/shared/constants/common.ts'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { IAdminSchema } from './adminSchema.ts'

const initialState: IAdminSchema = {
	accessToken: null
}

const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		setAccessToken: (state, action: PayloadAction<string>) => {
			state.accessToken = action.payload
		},
		logout: state => {
			state.accessToken = null
			Cookies.remove(REMEMBER_ME)
		}
	}
})

export const { actions: adminActions } = adminSlice
export const { reducer: adminReducer } = adminSlice
