import { useContext, useEffect, useState } from 'react'
import { Menu } from '@/components'
import ApplicationLogo from '@/components/ApplicationLogo'
import Dropdown from '@/components/Dropdown'
import ResponsiveNavLink from '@/components/ResponsiveNavLink'
import { Link } from '@inertiajs/react'
import { useLaravelReactI18n } from 'laravel-react-i18n'

import { AuthenticatedProvider, Context } from '@/context'

const Layout = ({ user, header, children }) => {
	const { setUser } = useContext(Context)
	const { t } = useLaravelReactI18n()

	useEffect(() => {
		setUser(user)
	}, [])

	const [showingNavigationDropdown, setShowingNavigationDropdown] =
		useState(false)

	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900">
			<nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex">
							<div className="shrink-0 flex items-center">
								<Link href="/">
									<ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
								</Link>
							</div>

							<Menu />
						</div>

						<div className="hidden sm:flex sm:items-center sm:ms-6">
							<div className="ms-3 relative">
								<Dropdown>
									<Dropdown.Trigger>
										<span className="inline-flex rounded-md">
											<button
												type="button"
												className="inline-flex items-center gap-x-1 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
											>
												{user.name}
												<i className="ri-arrow-down-s-line"></i>
											</button>
										</span>
									</Dropdown.Trigger>

									<Dropdown.Content>
										<Dropdown.Link href={route('profile.edit')}>
											{t('navbar.menu.profile')}
										</Dropdown.Link>
										<Dropdown.Link
											href={route('logout')}
											method="post"
											as="button"
										>
											{t('navbar.menu.logout')}
										</Dropdown.Link>
									</Dropdown.Content>
								</Dropdown>
							</div>
						</div>

						<div className="-me-2 flex items-center sm:hidden">
							<button
								onClick={() =>
									setShowingNavigationDropdown(
										(previousState) => !previousState
									)
								}
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
							>
								<svg
									className="h-6 w-6"
									stroke="currentColor"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										className={
											!showingNavigationDropdown ? 'inline-flex' : 'hidden'
										}
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
									<path
										className={
											showingNavigationDropdown ? 'inline-flex' : 'hidden'
										}
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<div
					className={
						(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'
					}
				>
					<div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
						<div className="px-4">
							<div className="font-medium text-base text-gray-800 dark:text-gray-200">
								{user.name}
							</div>
							<div className="font-medium text-sm text-gray-500">
								{user.email}
							</div>
						</div>

						<div className="mt-3 space-y-1">
							<ResponsiveNavLink href={route('profile.edit')}>
								Profile
							</ResponsiveNavLink>
							<ResponsiveNavLink
								method="post"
								href={route('logout')}
								as="button"
							>
								Log Out
							</ResponsiveNavLink>
						</div>
					</div>
				</div>
			</nav>

			{header && (
				<header className="bg-white dark:bg-gray-800 shadow">
					<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
						{header}
					</div>
				</header>
			)}

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
