import InputError from '@/components/InputError'
import InputLabel from '@/components/InputLabel'
import PrimaryButton from '@/components/PrimaryButton'
import TextInput from '@/components/TextInput'
import { useForm, usePage } from '@inertiajs/react'
import { Transition } from '@headlessui/react'
import { useLaravelReactI18n } from 'laravel-react-i18n'

export const ContactInformationForm = () => {
	const user = usePage().props.auth.user

	const { data, setData, patch, errors, processing, recentlySuccessful } =
		useForm({
			whatsapp: user.whatsapp,
			instagram_user: user.instagram_user,
			facebook_user: user.facebook_user,
			province_id: user.province_id,
			city_id: user.city_id,
		})

	const { t } = useLaravelReactI18n()

	const submit = (e) => {
		e.preventDefault()

		patch(route('profile.update.contact_information'), {
			preserveScroll: true,
		})
	}

	return (
		<section className="max-w-xl">
			<header>
				<h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
					Información de contacto
				</h2>

				<p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
					Update your account's profile information and email address.
				</p>
			</header>

			<form onSubmit={submit} className="mt-6 space-y-6">
				<div>
					<InputLabel htmlFor="whatsapp" value="Whatsapp" />

					<TextInput
						id="whatsapp"
						className="mt-1 block w-full"
						value={data.whatsapp ?? ''}
						onChange={(e) => setData('whatsapp', e.target.value)}
					/>

					<InputError className="mt-2" message={errors.whatsapp} />
				</div>

				<div>
					<InputLabel htmlFor="instagram_user" value="Usuario de Instagram" />

					<TextInput
						id="instagram_user"
						className="mt-1 block w-full"
						value={data.instagram_user ?? ''}
						onChange={(e) => setData('instagram_user', e.target.value)}
					/>

					<InputError className="mt-2" message={errors.instagram_user} />
				</div>

				<div>
					<InputLabel htmlFor="facebook_user" value="Usuario de Facebook" />

					<TextInput
						id="facebook_user"
						className="mt-1 block w-full"
						value={data.facebook_user ?? ''}
						onChange={(e) => setData('facebook_user', e.target.value)}
					/>

					<InputError className="mt-2" message={errors.facebook_user} />
				</div>

				<div>
					<InputLabel htmlFor="province_id" value="Provincia" />

					<TextInput
						id="province_id"
						className="mt-1 block w-full"
						value={data.province_id ?? ''}
						onChange={(e) => setData('province_id', e.target.value)}
					/>

					<InputError className="mt-2" message={errors.province_id} />
				</div>

				<div>
					<InputLabel htmlFor="city_id" value="Ciudad" />

					<TextInput
						id="city_id"
						className="mt-1 block w-full"
						value={data.city_id ?? ''}
						onChange={(e) => setData('city_id', e.target.value)}
					/>

					<InputError className="mt-2" message={errors.city_id} />
				</div>

				<div className="flex items-center gap-4">
					<PrimaryButton disabled={processing}>Save</PrimaryButton>

					<Transition
						show={recentlySuccessful}
						enter="transition ease-in-out"
						enterFrom="opacity-0"
						leave="transition ease-in-out"
						leaveTo="opacity-0"
					>
						<p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
					</Transition>
				</div>
			</form>
		</section>
	)
}
