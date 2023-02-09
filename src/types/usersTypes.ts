export interface IUser {
	name: string
	email: string
	contact: string
	relationship: string
}

export interface UserState {
	users: any[]
	user: IUser
	loading: boolean
}

export enum UsersActionTypes {
	GET_USERS = 'GET_USERS',
	ADD_USER = 'ADD_USER',
	DELETE_USER = 'DELETE_USER',
	UPDATE_USER = 'UPDATE_USER',
	GET_ONE_USER = 'GET_ONE_USER',
	FILTER_USERS = 'FILTER_USERS',
}

interface GetUsersAction {
	type: UsersActionTypes.GET_USERS
	payload: any[]
}

interface FilterUsersAction {
	type: UsersActionTypes.FILTER_USERS
	payload: any[]
}

interface AddUserAction {
	type: UsersActionTypes.ADD_USER
}

interface DeleteUserAction {
	type: UsersActionTypes.DELETE_USER
}

interface UpdateUserAction {
	type: UsersActionTypes.UPDATE_USER
	payload: IUser
}

interface GetOneUserAction {
	type: UsersActionTypes.GET_ONE_USER
	payload: IUser
}

export type UserAction =
	| GetUsersAction
	| DeleteUserAction
	| AddUserAction
	| UpdateUserAction
	| GetOneUserAction
	| FilterUsersAction
