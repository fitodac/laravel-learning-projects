'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { MainContext } from '@/context'


export const PageHeader = () =>
{

	const {
		user,
		auth
	} = useContext(MainContext)

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
							<div className="bg-indigo-600 w-8 h-8 rounded-full overflow-hidden">
								<div className="text-white text-xs font-light w-full h-full grid place-content-center">JD</div>
							</div>

							<Link href="/my-account" className="main-navbar--item">Profile</Link>
						</>
					) : (
						<>
							<Link href="/login" className="main-navbar--item">Log in</Link>
							<Link href="/register" className="main-navbar--item">Create Account</Link>
						</>
					)}
				</nav>

			</div>
		</div>
	)
}