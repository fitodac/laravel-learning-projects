'use client'

import { useState, useEffect } from 'react'
import { MainContext } from '.'
import { useGetUser } from '@/hooks'


export const MainProvider = ({children}) => {

	const [init, setInit] = useState(false)
	const [user, setUser] = useState(null)
	const [auth, setAuth] = useState(false)


	useEffect(() => {
		
		(async function(){
			const data = await useGetUser()
			delete data.data.tokens
			setAuth(data.success)
			setUser(data.success ? data.data : null)
			setInit(true)
		})()

	}, [])

	return (
		<MainContext.Provider value={{
			init,
			user,
			setUser,
			auth,
			setAuth
		}}>
			{children}
		</MainContext.Provider>
	)
}