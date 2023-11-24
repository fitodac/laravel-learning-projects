import { useContext } from 'react'
import { ButtonPrimary, InputError } from '@/components'
import { useForm } from '@inertiajs/react'
import { Context } from '@/context'
import { useLaravelReactI18n } from 'laravel-react-i18n'
import { DeletePet } from '.'
import { inputChange, inputChangeFile } from '@/helpers'

export const CreateEditPetForm = ({ initialValues }) => {
	const { user } = useContext(Context)
	const { data, setData, post, patch, put, processing, progress, errors } =
		useForm({
			...initialValues,
		})
	const { t } = useLaravelReactI18n()

	const handleChange = (e) => {
		const val = inputChange(e)
		setData({ ...data, ...val })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		console.log(data)

		if (data.id) {
			patch(
				route('user.pets.update', { user: user.username, pet: data.id }),
				data,
				{
					headers: { 'Content-Type': 'application/json' },
				}
			)
		} else {
			post(route('user.pets.store', { user: user.username }))
		}
	}

	return (
		<>
			<div className="max-w-5xl mx-auto">
				<form
					className={`transition-all ${processing ? 'opacity-30' : ''}`}
					onSubmit={handleSubmit}
				>
					<section className="grid grid-cols-4 gap-10">
						<div className="">
							{data.picture && (
								<img src={URL.createObjectURL(data.picture)} alt={data?.name} />
							)}

							<div className="h-5" />

							<input
								type="file"
								name="picture"
								onChange={(e) => setData('picture', e.target.files[0])}
							/>

							<pre>{JSON.stringify(progress, null, 2)}</pre>

							{progress && (
								<progress value={progress.percentage} max="100">
									{progress.percentage}%
								</progress>
							)}
						</div>

						<div className="grid grid-cols-2 gap-5 col-span-3">
							<div className="grid gap-1">
								<label htmlFor="">Nombre</label>
								<input
									type="text"
									name="name"
									value={data.name}
									onChange={handleChange}
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
										/>
									</div>

									<div className="grid gap-1">
										<label htmlFor="">Año</label>
										<input
											type="text"
											name="year"
											value={data.year}
											onChange={handleChange}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-8 col-span-4 flex justify-end">
							<ButtonPrimary type="submit">
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
