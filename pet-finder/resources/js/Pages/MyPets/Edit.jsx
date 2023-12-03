import AuthenticatedLayout from '@/layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { CreateEditPetForm } from './components'
import { useLaravelReactI18n } from 'laravel-react-i18n'
import { MyPetProvider } from './context'
import { useLaravelReactI18n } from 'laravel-react-i18n'

export default function PetCreateEditPage({ auth, pet }) {
	const { user } = auth
	const { t } = useLaravelReactI18n()

	return (
		<AuthenticatedLayout
			user={user}
			header={
				<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
					Actualizar datos de la Mascota
				</h2>
			}
		>
			<Head title={t('ui.editing to :name', { name: pet.name })} />

			<MyPetProvider>
				<div className="text-slate-300 max-w-7xl mx-auto py-10">
					<CreateEditPetForm initialValues={pet} />
				</div>
			</MyPetProvider>
		</AuthenticatedLayout>
	)
}
