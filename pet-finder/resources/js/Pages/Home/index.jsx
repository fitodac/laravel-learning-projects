import GuestLayout from '@/layouts/GuestLayout'
import { Link, Head } from '@inertiajs/react'
import { Hero } from './components'

export default function HomePage({ auth }) {
	return (
		<GuestLayout>
			{/* <Head title="Pet Finder" /> */}
			<Hero />

			<main className="px-6">
				<div className="max-w-7xl mx-auto p-6 lg:p-8">
					Para usar la aplicación debes registrarte o iniciar sesión
				</div>
			</main>
		</GuestLayout>
	)
}
