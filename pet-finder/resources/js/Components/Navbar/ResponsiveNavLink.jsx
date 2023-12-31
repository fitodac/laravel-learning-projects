import { Link } from '@inertiajs/react'

export const ResponsiveNavLink = ({
	active = false,
	className = '',
	children,
	...props
}) => {
	return (
		<Link
			{...props}
			className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
				active
					? 'border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300'
					: 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-700 hover:border-stone-300 dark:hover:border-stone-600 focus:text-stone-800 dark:focus:text-stone-200 focus:bg-stone-50 dark:focus:bg-stone-700 focus:border-stone-300 dark:focus:border-stone-600'
			} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
		>
			{children}
		</Link>
	)
}
