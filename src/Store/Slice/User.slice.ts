import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role } from '../types'; // Assuming Role type is defined in '../types'

export interface UserAuth {
	username: string | null;
	role: Role | null;
	isAuthenticated: boolean;
	accessToken: string | null;
	refreshToken: string | null;
	email: string | null;
}

const initialState: UserAuth = {
	username: null,
	role: null,
	isAuthenticated: false,
	accessToken: null,
	refreshToken: null,
	email: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (
			state,
			action: PayloadAction<{
				username: string;
				role: Role;
				accessToken: string;
				refreshToken: string;
				email: string;
			}>
		) => {
			state.username = action.payload.username;
			state.role = action.payload.role;
			state.isAuthenticated = true;
			state.accessToken = action.payload.accessToken;
			state.refreshToken = action.payload.refreshToken;
			state.email = action.payload.email;
		},
		clearUser: (state) => {
			state.username = null;
			state.role = null;
			state.isAuthenticated = false;
			state.accessToken = null;
			state.refreshToken = null;
			state.email = null;
		},
		refetchTokenOnRefreshToken: (state, action: PayloadAction<{ accessToken: string }>) => {
			state.accessToken = action.payload.accessToken;
		},
		logout: (state: any) => {
			state.value = initialState;
		},
	},
});

export const { setUser, clearUser, refetchTokenOnRefreshToken, logout } = userSlice.actions;
export const UserAuthSelector = (state: { user: UserAuth }) => state.user;
export default userSlice.reducer;
