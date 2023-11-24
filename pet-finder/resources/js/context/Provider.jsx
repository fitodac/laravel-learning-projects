import { useContext, useReducer } from 'react'

import { Context, actions, initialState, reducer } from '.'

export const AuthenticatedProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const setUser = (value) => {
		dispatch({
			type: actions.SET_USER,
			payload: value,
		})
	}

	const { user } = state

	// console.log('reducer', state)

	const value = {
		user,
		setUser,
	}

	return <Context.Provider value={value}>{children}</Context.Provider>
}
