import AuthenticatedLayout from '@/layouts/AuthenticatedLayout'
import { Link, Head } from '@inertiajs/react'
import { ButtonPrimary, List, Grid } from '@/components'
import { useLaravelReactI18n } from 'laravel-react-i18n'

export default function PetsListPage({ auth, pets }) {
	const { user } = auth
	const { t } = useLaravelReactI18n()

	return (
		<AuthenticatedLayout
			user={user}
			header={
				<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
					{t('navbar.menu.my_pets')}
				</h2>
			}
		>
			<Head title="Mis Mascotas" />

			<div className="text-slate-400 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
				{pets && (
					<div className="space-y-2">
						{pets.map(({ id, name, breed, gender, species }) => (
							<div
								key={`pet_${id}`}
								className="bg-slate-800 grid grid-cols-10 rounded-md"
							>
								<div className="col-span-2"></div>

								<div className="col-span-3 p-4">
									<div className="font-semibold">{name}</div>
									<div className="text-sm">{breed.name}</div>
									<div className="text-sm">{gender}</div>
									<div className="text-sm">{t(`pets.${species}`)}</div>
								</div>

								<div className="col-span-5 p-4 flex justify-end">
									<div className="">
										<Link
											href={route('user.pets.edit', {
												user: user.username,
												pet: id,
											})}
											className="bg-slate-900 px-6 py-1.5 rounded-md"
										>
											{t('ui.edit')}
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				)}

				<div className="mt-4 flex justify-end">
					<Link
						href={route('user.pets.create', { user: user?.username })}
						className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
					>
						{t('profile.new_pet')}
					</Link>
				</div>
			</div>
		</AuthenticatedLayout>
	)
}
