import { UserAction, UserState, UsersActionTypes } from '../types/usersTypes'

const initialValue: UserState = {
	users: [],
	user: { name: '', email: '', contact: '', relationship: '' },
	loading: true,
}
export const usersReducer = (state = initialValue, action: UserAction): UserState => {
	switch (action.type) {
		case UsersActionTypes.GET_USERS:
			return { ...state, loading: false, users: action.payload }
		case UsersActionTypes.GET_ONE_USER:
			return { ...state, loading: false, user: action.payload }
		case UsersActionTypes.FILTER_USERS:
			return { ...state, loading: false, users: action.payload }
		default:
			return state
	}
}
