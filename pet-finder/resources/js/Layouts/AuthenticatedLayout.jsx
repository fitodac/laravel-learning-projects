import { useContext, useEffect, useState } from 'react'
import { useLaravelReactI18n } from 'laravel-react-i18n'
import { AuthenticatedProvider, Context } from '@/context'
import { AuthenticatedNavbar } from '@/components'

const getWindowSize = () => {
	const { innerWidth, innerHeight } = window
	return { width: innerWidth, height: innerHeight }
}

const Layout = ({ user, header, children }) => {
	const { setUser } = useContext(Context)
	const { t } = useLaravelReactI18n()

	useEffect(() => {
		setUser(user)
	}, [])

	return (
		<div className="min-h-screen bg-gray-100 mt-20">
			<AuthenticatedNavbar />
			{/* {header && (
				<header className="bg-white dark:bg-gray-800 shadow">
					<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
						{header}
					</div>
				</header>
			)} */}

			<main>{children}</main>
		</div>
	)
}

export default function Authenticated({ user, header, children }) {
	return (
		<AuthenticatedProvider>
			<Layout user={user} header={header} children={children} />
		</AuthenticatedProvider>
	)
}
