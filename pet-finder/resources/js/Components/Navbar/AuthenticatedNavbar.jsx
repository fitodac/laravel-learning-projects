import { useContext, useState } from 'react'
import { Link } from '@inertiajs/react'
import { Menu, Brand, Dropdown, ResponsiveNavLink } from '@/components'
import { Context } from '@/context'
import { useLaravelReactI18n } from 'laravel-react-i18n'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const AuthenticatedNavbar = () => {
	const { user } = useContext(Context)
	const { t } = useLaravelReactI18n()

	const [showingNavigationDropdown, setShowingNavigationDropdown] =
		useState(false)

	return (
		<>
			<div className="bg-amber9 text-amber11 top-0 inset-x-0 fixed">
				<div className="px-6 py-2 flex justify-between items-center">
					<div className="flex items-center gap-x-3">
						{route().current('dashboard') ? (
							<Brand className="fill-white w-12 h-auto" />
						) : (
							<Link href="/">
								<Brand className="fill-white w-12 h-auto" />
							</Link>
						)}

						<Menu />
					</div>

					<div className="">
						<DropdownMenu.Root>
							<DropdownMenu.Trigger>
								<span className="space-x-2 select-none transition-all hover:text-white">
									<span>{user?.name}</span>
									<i className="ri-menu-2-line"></i>
								</span>
							</DropdownMenu.Trigger>

							<DropdownMenu.Portal>
								<DropdownMenu.Content
									className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
									sideOffset={5}
								>
									<DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
										New Tab{' '}
										<div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
											⌘+T
										</div>
									</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Portal>

							{/* 
							<Dropdown.Trigger>
								<span className="inline-flex rounded-md">
									<button
										type="button"
										className="inline-flex items-center gap-x-1 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
									>
										
										<i className="ri-arrow-down-s-line"></i>
									</button>
								</span>
							</Dropdown.Trigger>

							<Dropdown.Content>
								<Dropdown.Link href={route('profile.edit')}>
									{t('navbar.menu.profile')}
								</Dropdown.Link>
								<Dropdown.Link href={route('logout')} method="post" as="button">
									{t('navbar.menu.logout')}
								</Dropdown.Link>
							</Dropdown.Content> 
							*/}
						</DropdownMenu.Root>
					</div>

					<div className="-me-2 flex items-center sm:hidden">
						<button
							onClick={() =>
								setShowingNavigationDropdown((previousState) => !previousState)
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

				<div
					className={
						(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'
					}
				>
					<div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
						<div className="px-4">
							<div className="font-medium text-base text-gray-800 dark:text-gray-200">
								{user?.name}
							</div>
							<div className="font-medium text-sm text-gray-500">
								{user?.email}
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
			</div>
		</>
	)
}
