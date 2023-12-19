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
	Button,
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
						<div className="bg-white rounded-3xl shadow-stone-200 shadow-xl">
							<h1 className="bg-amber9 text-amber11 text-xl font-medium px-6 pt-5 pb-2 mb-3 rounded-t-3xl">
								{t('ui.login')}
							</h1>

							<div className="px-6 pt-2 pb-8">
								<form onSubmit={submit} className="space-y-3">
									<div className="space-y-1.5">
										<InputLabel
											htmlFor="email"
											value={t('ui.username / email')}
										/>

										<InputText
											id="email"
											type="text"
											name="email"
											value={data.email}
											autoComplete="name"
											isFocused={true}
											onChange={(e) => setData('email', e.target.value)}
										/>

										<InputError message={errors.email} className="mt-2" />
									</div>

									<div className="space-y-1.5">
										<InputLabel htmlFor="password" value={t('ui.password')} />

										<InputText
											id="password"
											type="password"
											name="password"
											value={data.password}
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
						</div>

						<div className="text-center space-y-2 mt-6">
							<div>
								<Button variant="ghost" asChild>
									<Link href={route('register')}>
										{t('ui.not already registered')}
									</Link>
								</Button>
							</div>

							{canResetPassword && (
								<div>
									<Button variant="ghost" asChild>
										<Link href={route('password.request')}>
											{t('ui.forgot password')}
										</Link>
									</Button>
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
