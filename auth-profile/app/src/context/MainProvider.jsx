'use client'

import { useState, useEffect } from 'react'
import { MainContext } from '.'

export const MainProvider = ({children}) => {

	const [user, setUser] = useState(null)
	const [auth, setAuth] = useState(false)

	// useEffect(() => {
	// 	if( user ) setAuth(true)
	// }, [user])

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