import { useEffect, useContext } from 'react'
import { ButtonPrimary, InputError } from '@/components'
import { Link } from '@inertiajs/react'
import { Context } from '@/context'
import { useLaravelReactI18n } from 'laravel-react-i18n'
import { DeletePet, FormImage } from '.'

import 'filepond/dist/filepond.min.css'
import { MyPetProvider, myPetContext } from '../context'

export const CreateEditPetForm = ({ initialValues }) => {
	const { user } = useContext(Context)
	const {
		data,
		setData,
		loading,
		errors,
		handleChange,
		handleSubmit,
	} = useContext(myPetContext)
	const { t } = useLaravelReactI18n()

	useEffect(() => {
		// console.log(setData)
		if (initialValues) setData(initialValues)
	}, [])

	return (
		<>
			<div className="max-w-5xl mx-auto">
				<form
					className={`transition-all ${
						loading ? 'opacity-30 pointer-events-none' : ''
					}`}
					onSubmit={handleSubmit}
				>
					<section className="grid grid-cols-4 gap-10">
						<div className="">
							<FormImage />
						</div>

						<div className="grid grid-cols-2 gap-5 col-span-3">
							<div className="grid gap-1">
								<label htmlFor="">Nombre</label>
								<input
									type="text"
									name="name"
									value={data.name}
									onChange={handleChange}
									disabled={loading}
								/>
								<InputError error={errors.name} />
							</div>

							<div className="grid gap-1"></div>

							<div className="grid gap-1">
								<label htmlFor="">Especie</label>
								<div className="flex gap-3">
									<label htmlFor="">
										<input
											type="radio"
											name="species"
											value="dog"
											checked={data.species === 'dog'}
											onChange={handleChange}
											disabled={loading}
										/>
										<span>Perro</span>
									</label>

									<label htmlFor="">
										<input
											type="radio"
											name="species"
											value="cat"
											checked={data.species === 'cat'}
											onChange={handleChange}
											disabled={loading}
										/>
										<span>Gato</span>
									</label>
								</div>
								<InputError error={errors.species} />
							</div>

							<div className="grid gap-1">
								<label htmlFor="">Raza</label>
								<input
									type="text"
									name="breed_id"
									value={data.breed_id}
									onChange={handleChange}
									disabled={loading}
								/>
								<InputError error={errors.breed_id} />
							</div>

							<div className="grid gap-1">
								<label htmlFor="">Género</label>
								<input
									type="text"
									name="gender"
									value={data.gender}
									onChange={handleChange}
									disabled={loading}
								/>
								<InputError error={errors.gender} />
							</div>

							<div className="grid gap-1">
								<label htmlFor="">Description</label>
								<input
									type="text"
									name="description"
									value={data.description}
									onChange={handleChange}
									disabled={loading}
								/>
							</div>

							<div className="grid gap-1">
								<label htmlFor="">Nacimiento</label>

								<div className="grid grid-cols-2 gap-4">
									<div className="grid gap-1">
										<label htmlFor="">Mes</label>
										<input
											type="text"
											name="month"
											value={data.month}
											onChange={handleChange}
											disabled={loading}
										/>
									</div>

									<div className="grid gap-1">
										<label htmlFor="">Año</label>
										<input
											type="text"
											name="year"
											value={data.year}
											onChange={handleChange}
											disabled={loading}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-8 col-span-4 flex justify-end items-center gap-x-10">
							{user && (
								<Link
									href={route('user.pets', {
										user: user.username,
									})}
								>
									{t('ui.cancel')} / {t('ui.back')}
								</Link>
							)}

							<ButtonPrimary type="submit" disabled={loading}>
								<span className="px-4 py-1">
									{initialValues?.id ? t('ui.save') : t('ui.create')}
								</span>
							</ButtonPrimary>
						</div>
					</section>
				</form>

				{data?.id && (
					<>
						<hr className="my-6" />

						<div className="">
							<DeletePet pet={data} />
						</div>
					</>
				)}
			</div>
		</>
	)
}
