'use client'

import { useState } from 'react'
import { MainContext } from '.'
import { useToken } from '@/hooks'

const userInitialState = () => {
	const stored_token = useToken().get()
	return stored_token ? {token: stored_token} : null
}

export const MainProvider = ({children}) => {

	const [user, setUser] = useState(userInitialState)
	const [auth, setAuth] = useState(false)

	return (
		<MainContext.Provider value={{
			user,
			setUser,
			auth,
			setAuth
		}}>
			{children}
		</MainContext.Provider>
	)
}