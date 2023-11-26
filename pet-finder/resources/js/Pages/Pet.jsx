import { Link, Head, usePage } from '@inertiajs/react'
import { Img } from 'react-image'
import { useLaravelReactI18n } from 'laravel-react-i18n'

export default function PetPage({ pet }) {
	console.log('pet', pet)
	const { name, picture, gender, species, description, breed } = pet
	const { t } = useLaravelReactI18n()
	const {
		props: {
			ziggy: { url },
		},
	} = usePage()

	return (
		<>
			<Head title={`${name}`} />

			<div className="text-slate-300 relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
				<div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end"></div>

				<div className="max-w-7xl mx-auto p-6 lg:p-8">
					<Img src={`${url}/storage/pets/${picture}`} alt={name} width="400" />
					<h1 className="text-xl font-medium">{name}</h1>
					<p>{gender}</p>
					<p>{t(`pets.${species}`)}</p>
					<p>{breed.name}</p>
					<div className="mt-5">
						<h3 className="text-lg font-semibold">Contacto</h3>
						
					</div>
				</div>
			</div>
		</>
	)
}
