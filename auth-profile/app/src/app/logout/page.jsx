'use client'

import { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { MainContext } from '@/context'

import { Loading } from '@/components'
import { useToken } from '@/hooks'
import { 
	useRouter,
	redirect
} from 'next/navigation'



export default function Logout()
{

	const { 
		auth,
		setAuth,
		setUser
	} = useContext(MainContext)
	const router = useRouter()

	useEffect(() => {
		
		axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}/logout`,
			null,
			{ 
				headers: {
					Authorization: useToken().get()
				}
			}
		)
		.then(resp => {
			if( resp.data.success ){
				useToken().remove()
				setAuth(false)
				setUser(null)
			}
		})
		.catch(err => {
			console.log(err.response)
		})

	}, [])


	if( !auth ) redirect('/login')


	return (
		<div className="w-full py-20">
			<div className="h-20 relative">
				<Loading status={true} />
			</div>
			<div className="text-indigo-500 text-sm text-center">you're logging out, this could take some time</div>
		</div>
	)
}