import axios from 'axios'
import { Dispatch } from 'react'
import { IUser, UserAction, UsersActionTypes } from '../types/usersTypes'

const API = 'http://localhost:8000/users'

export const getUsers = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		const res = await axios(API)
		dispatch({ type: UsersActionTypes.GET_USERS, payload: res.data })
	}
}

export const deleteUsers = (id: string | number) => {
	return async (dispatch: Dispatch<UserAction> | any) => {
		await axios.delete(`${API}/${id}`)
		dispatch(getUsers())
	}
}

export const addUsers = (contact: IUser) => {
	return async (dispatch: Dispatch<UserAction> | any) => {
		await axios.post(API, contact)
		dispatch(getUsers())
	}
}

export const getOneUser = (id: string | undefined) => {
	return async (dispatch: Dispatch<UserAction> | any) => {
		let res = await axios(`${API}/${id}`)
		dispatch({ type: UsersActionTypes.GET_ONE_USER, payload: res.data })
	}
}

export const updateUser = (user: IUser, id: string | undefined) => {
	return async (dispatch: Dispatch<UserAction> | any) => {
		let res = await axios.patch(`${API}/${id}`, user)
		dispatch({ type: UsersActionTypes.GET_ONE_USER, payload: res.data })
	}
}

export const filterUser = (filter: string) => {
	return async (dispatch: Dispatch<UserAction> | any) => {
		let res = await axios(API)
		dispatch({
			type: UsersActionTypes.FILTER_USERS,
			payload: res.data.filter((item: IUser) => item.relationship == filter),
		})
	}
}
