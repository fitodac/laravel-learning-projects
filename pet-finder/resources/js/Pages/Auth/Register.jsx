import { useEffect } from 'react'
import GuestLayout from '@/layouts/GuestLayout'

import PrimaryButton from '@/components/PrimaryButton'
import TextInput from '@/components/TextInput'
import { Link, useForm } from '@inertiajs/react'
import { useLaravelReactI18n } from 'laravel-react-i18n'
import {
	HTMLhead,
	InputText,
	InputLabel,
	InputError,
	Checkbox,
	ButtonPrimary,
} from '@/components'

export default function Register() {
	const { t } = useLaravelReactI18n()

	const { data, setData, post, processing, errors, reset } = useForm({
		name: '',
		email: '',
		password: '',
		password_confirmation: '',
	})

	useEffect(() => {
		return () => {
			reset('password', 'password_confirmation')
		}
	}, [])

	const submit = (e) => {
		e.preventDefault()

		post(route('register'))
	}

	return (
		<GuestLayout>
			<HTMLhead
				title={t('ui.register')}
				description={t('seo.login.description')}
			/>

			<main className="min-h-screen px-6 grid grid-cols-1 place-content-center">
				<div>
					<div className="mx-auto sm:max-w-xs">
						<div className="bg-stone-100 px-5 py-4 rounded-3xl">
							<h1 className="bg-yellow-400 text-yellow-800 text-xl font-medium px-5 pt-5 pb-2 -mx-5 -mt-4 mb-3 rounded-t-3xl">
								{t('ui.register')}
							</h1>

							<form onSubmit={submit}>
								<div>
									<InputLabel htmlFor="name" value={t('ui.username')} />

									<InputText
										id="name"
										name="name"
										value={data.name}
										className="mt-1 block w-full"
										autoComplete="name"
										isFocused={true}
										onChange={(e) => setData('name', e.target.value)}
										required
									/>

									<InputError message={errors.name} className="mt-2" />
								</div>

								<div className="mt-4">
									<InputLabel htmlFor="email" value={t('ui.email')} />

									<InputText
										id="email"
										type="email"
										name="email"
										value={data.email}
										className="mt-1 block w-full"
										autoComplete="email"
										onChange={(e) => setData('email', e.target.value)}
										required
									/>

									<InputError message={errors.email} className="mt-2" />
								</div>

								<div className="mt-4">
									<InputLabel htmlFor="password" value={t('ui.password')} />

									<InputText
										id="password"
										type="password"
										name="password"
										value={data.password}
										className="mt-1 block w-full"
										autoComplete="new-password"
										onChange={(e) => setData('password', e.target.value)}
										required
									/>

									<InputError message={errors.password} className="mt-2" />
								</div>

								<div className="mt-4">
									<InputLabel
										htmlFor="password_confirmation"
										value={t('ui.confirm password')}
									/>

									<InputText
										id="password_confirmation"
										type="password"
										name="password_confirmation"
										value={data.password_confirmation}
										className="mt-1 block w-full"
										autoComplete="new-password"
										onChange={(e) =>
											setData('password_confirmation', e.target.value)
										}
										required
									/>

									<InputError
										message={errors.password_confirmation}
										className="mt-2"
									/>
								</div>

								<div className="flex items-center justify-end mt-4">
									<ButtonPrimary disabled={processing} className="w-full">
										{t('ui.register')}
									</ButtonPrimary>
								</div>
							</form>
						</div>

						<div className="text-center space-y-1 mt-3">
							<div>
								<Link
									href={route('login')}
									className="text-sm font-medium select-none transition-all hover:text-yellow-500"
								>
									{t('ui.already registered')}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</main>
		</GuestLayout>
	)
}
