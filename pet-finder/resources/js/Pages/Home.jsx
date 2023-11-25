import { Link, Head } from '@inertiajs/react'

export default function HomePage({ auth }) {
	return (
		<>
			<Head title="Pet Finder" />

			<div className="text-slate-300 relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
				<div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
					{auth.user ? (
						<Link
							href={route('user.pets')}
							className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
						>
							Dashboard
						</Link>
					) : (
						<>
							<Link
								href={route('login')}
								className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
							>
								Log in
							</Link>

							<Link
								href={route('register')}
								className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
							>
								Register
							</Link>
						</>
					)}
				</div>

				<div className="max-w-7xl mx-auto p-6 lg:p-8">
					Para usar la aplicación debes registrarte o iniciar sesión
				</div>
			</div>
		</>
	)
}
