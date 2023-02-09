import { combineReducers } from 'redux'
import { usersReducer } from './reducer'

const rootReducer = combineReducers({
	data: usersReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
