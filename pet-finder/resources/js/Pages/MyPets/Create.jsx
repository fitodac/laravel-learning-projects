import AuthenticatedLayout from '@/layouts/AuthenticatedLayout'
import { Link, Head } from '@inertiajs/react'
import { CreateEditPetForm } from './components'
import { initialValues } from './helpers'
import { useLaravelReactI18n } from 'laravel-react-i18n'

export default function PetCreateEditPage({ auth }) {
	const { user } = auth
	const { t } = useLaravelReactI18n()

	return (
		<AuthenticatedLayout
			user={user}
			header={
				<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
					Nueva Mascota
				</h2>
			}
		>
			<Head title={t('navbar.menu.my_pets')} />

			<div className="text-slate-300 max-w-7xl mx-auto py-10">
				<CreateEditPetForm
					initialValues={initialValues}
				/>
			</div>
		</AuthenticatedLayout>
	)
}
