import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../redux/rootReducer'

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector
