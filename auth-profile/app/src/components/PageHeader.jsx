'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import { MainContext } from '@/context'



const UserName = ({user}) => {
	if( user ){
		return (
			<div className="flex items-center gap-x-2">
				{user.firstname && user.lastname && (
					<div className="bg-indigo-600 w-8 h-8 rounded-full overflow-hidden">
						<div className="text-white text-xs font-light w-full h-full grid place-content-center">
							{user?.firstname[0]}
							{user?.lastname[0]}
						</div>
					</div>
				)}

				{user.firstname && (<span className="text-xs pr-6">Hello {user.firstname}</span>)}
			</div>
		)
	}else{
		return null
	}
}





export const PageHeader = () =>
{

	const {
		init,
		user,
		auth
	} = useContext(MainContext)

	const pathname = usePathname()

	if( !init ) return 

	return (
		<div className="bg-white border-b-border-slate-100 px-6 inset-x-0 fixed z-10">
			<div className="h-10 flex justify-between items-center">

				<Link href="/" className="text-indigo-600 select-none">
					<span className="font-semibold">AuthProfile</span>
					<span className="text-sm pl-1">app</span>
				</Link>

				<nav className="main-navbar">

					{auth ? (
						<>
							<UserName user={user} />

							<Link href="/my-account" className={`main-navbar--item ${pathname === '/my-account' ? 'active' : ''}`}>Mi Cuenta</Link>
							<Link href="/logout" className="main-navbar--item">Salir</Link>
						</>
					) : (
						<>
							<Link href="/login" className={`main-navbar--item ${pathname === '/login' ? 'active' : ''}`}>Entrar</Link>
							<Link href="/register" className={`main-navbar--item ${pathname === '/register' ? 'active' : ''}`}>Registrarme</Link>
						</>
					)}
				</nav>

			</div>
		</div>
	)
}