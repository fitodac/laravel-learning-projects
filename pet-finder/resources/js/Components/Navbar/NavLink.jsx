import { Link } from '@inertiajs/react'

export const NavLink = ({
	active = false,
	className = '',
	children,
	...props
}) => {
	return (
		<Link
			{...props}
			className={
				`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium 
				leading-5 transition duration-150 ease-in-out focus:outline-none ` +
				(active
					? `border-indigo-400 dark:border-indigo-600 text-stone-900 
							dark:text-stone-100 focus:border-indigo-700 `
					: `border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-700 
						dark:hover:text-stone-300 hover:border-stone-300 dark:hover:border-stone-700 
						focus:text-stone-700 dark:focus:text-stone-300 focus:border-stone-300 
						dark:focus:border-stone-700 `) +
				className
			}
		>
			{children}
		</Link>
	)
}
