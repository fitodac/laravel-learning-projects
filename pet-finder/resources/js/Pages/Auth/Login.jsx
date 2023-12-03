import { useEffect } from 'react'
import Checkbox from '@/components/Checkbox'
import GuestLayout from '@/layouts/GuestLayout'
import InputError from '@/components/InputError'
import InputLabel from '@/components/InputLabel'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import TextInput from '@/components/TextInput'
import { Link, useForm } from '@inertiajs/react'
import { useLaravelReactI18n } from 'laravel-react-i18n'
import { HTMLhead } from '@/components'

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
				title={t('auth.login')}
				description={t('seo.login.description')}
			/>

			{status && (
				<div className="mb-4 font-medium text-sm text-green-600">{status}</div>
			)}

			<main className="min-h-screen px-6 grid grid-cols-1 place-content-center">
				<div className="">
					<div className="sm:max-w-xs mx-auto">
						<h1 className="">{t('auth.login')}</h1>
						<form onSubmit={submit}>
							<div>
								<InputLabel htmlFor="email" value="Username or Email" />

								<TextInput
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

							<div className="mt-4">
								<InputLabel htmlFor="password" value="Password" />

								<TextInput
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

							<div className="block mt-4">
								<label className="flex items-center">
									<Checkbox
										name="remember"
										checked={data.remember}
										onChange={(e) => setData('remember', e.target.checked)}
									/>
									<span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
										Remember me
									</span>
								</label>
							</div>

							<div className="flex items-center justify-end mt-4">
								{canResetPassword && (
									<Link
										href={route('password.request')}
										className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
									>
										Forgot your password?
									</Link>
								)}

								<PrimaryButton className="ms-4" disabled={processing}>
									Log in
								</PrimaryButton>
							</div>
						</form>

						<div className="my-4">
							<Link
								href={route('register')}
								className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
							>
								Aún no tengo una cuenta
							</Link>
						</div>

						<div className="mt-4">
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
				</div>
			</main>
		</GuestLayout>
	)
}
