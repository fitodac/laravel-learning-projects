import { useEffect } from 'react'
import GuestLayout from '@/layouts/GuestLayout'
import SecondaryButton from '@/components/SecondaryButton'
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

export default function Login({ status, canResetPassword }) {
	const { t } = useLaravelReactI18n()

	const { data, setData, post, processing, errors, reset } = useForm({
		email: '',
		password: '',
		remember: false,
	})

	useEffect(() => {
		return () => {
			reset('password')
		}
	}, [])

	const submit = (e) => {
		e.preventDefault()

		post(route('login'))
	}

	return (
		<GuestLayout>
			<HTMLhead
				title={t('ui.login')}
				description={t('seo.login.description')}
			/>

			{status && (
				<div className="mb-4 font-medium text-sm text-green-600">{status}</div>
			)}

			<main className="min-h-screen px-6 grid grid-cols-1 place-content-center">
				<div>
					<div className="mx-auto sm:max-w-xs">
						<div className="bg-stone-100 px-5 py-4 rounded-3xl">
							<h1 className="bg-yellow-400 text-yellow-800 text-xl font-medium px-5 pt-5 pb-2 -mx-5 -mt-4 mb-3 rounded-t-3xl">
								{t('ui.login')}
							</h1>

							<form onSubmit={submit} className="space-y-3">
								<div>
									<InputLabel
										htmlFor="email"
										value={t('ui.username / email')}
									/>

									<InputText
										id="email"
										type="text"
										name="email"
										value={data.email}
										className="mt-1 block w-full"
										autoComplete="name"
										isFocused={true}
										onChange={(e) => setData('email', e.target.value)}
									/>

									<InputError message={errors.email} className="mt-2" />
								</div>

								<div>
									<InputLabel htmlFor="password" value={t('ui.password')} />

									<InputText
										id="password"
										type="password"
										name="password"
										value={data.password}
										className="mt-1 block w-full"
										autoComplete="current-password"
										onChange={(e) => setData('password', e.target.value)}
									/>

									<InputError message={errors.password} className="mt-2" />
								</div>

								<div>
									<Checkbox
										name="remember"
										checked={data.remember}
										onChange={(e) => setData('remember', e.target.checked)}
										label={t('ui.remember me')}
									/>
								</div>

								<div>
									<ButtonPrimary disabled={processing} className="w-full">
										{t('ui.login')}
									</ButtonPrimary>
								</div>
							</form>
						</div>

						<div className="text-center space-y-1 mt-3">
							<div>
								<Link
									href={route('register')}
									className="text-sm font-medium select-none transition-all hover:text-yellow-500"
								>
									{t('ui.not already registered')}
								</Link>
							</div>

							{canResetPassword && (
								<div>
									<Link
										href={route('password.request')}
										className="text-sm font-medium select-none transition-all hover:text-yellow-500"
									>
										{t('ui.forgot password')}
									</Link>
								</div>
							)}
						</div>
					</div>

					<div className="text-center mt-6">
						<SecondaryButton
							onClick={() => {
								setData({
									email: 'fitodac@gmail.com',
									password: '123123',
									remember: true,
								})
							}}
						>
							Auto fill user data
						</SecondaryButton>
					</div>
				</div>
			</main>
		</GuestLayout>
	)
}
