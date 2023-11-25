import { useState, useContext } from 'react'
import { ButtonPrimary, InputError } from '@/components'
import { useLaravelReactI18n } from 'laravel-react-i18n'
import { Context } from '@/context'
import { useForm } from '@inertiajs/react'
import { inputChange } from '@/helpers'

export const DeletePet = ({ pet }) => {
	const { user } = useContext(Context)
	const {
		data,
		setData,
		delete: useFormDelete,
		processing,
		errors,
	} = useForm({
		name: '',
	})
	const [modal, setModal] = useState(false)
	const { t } = useLaravelReactI18n()

	const handleChange = (e) => {
		const val = inputChange(e)
		setData({ ...data, ...val })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		useFormDelete(
			route('user.pets.destroy', { user: user.username, pet: pet.id })
		)
	}

	return (
		<>
			<ButtonPrimary type="button" onClick={() => setModal(true)}>
				{t('profile.delete pet')}
			</ButtonPrimary>

			{modal && (
				<div className="bg-black bg-opacity-70 grid place-content-center inset-0 fixed z-50">
					<div className="bg-slate-800 w-96 relative rounded-md">
						<div className="p-5 space-y-2">
							<div className="">
								<p>
									{`${t('profile.delete pet info')}: `}
									<span className="text-white font-bold">{pet.name}</span>
								</p>
								<p className="text-red-500 font-medium">
									{t('ui.action can not be undone')}
								</p>
							</div>

							<form
								className={`transition-all ${processing ? 'opacity-30' : ''}`}
								onSubmit={handleSubmit}
							>
								<div className="space-y-2">
									<div className="">
										<input type="text" name="name" onChange={handleChange} />
									</div>
									<div className="">
										<ButtonPrimary>{t('ui.delete')}</ButtonPrimary>
									</div>
									<InputError error={errors.name} />
								</div>
							</form>
						</div>

						<i
							className="ri-close-line ri-xl right-1 top-2 absolute cursor-pointer transition-all hover:opacity-50"
							onClick={() => setModal(false)}
						/>
					</div>
				</div>
			)}
		</>
	)
}
