import GuestLayout from '@/layouts/GuestLayout'
import TextInput from '@/components/TextInput'
import { Head, useForm } from '@inertiajs/react'
import { useLaravelReactI18n } from 'laravel-react-i18n'
import {
	HTMLhead,
	InputText,
	InputLabel,
	InputError,
	ButtonPrimary,
	Button,
} from '@/components'

export default function ForgotPassword({ status }) {
	const { t } = useLaravelReactI18n()
	const { data, setData, post, processing, errors } = useForm({
		email: '',
	})

	const submit = (e) => {
		e.preventDefault()

		post(route('password.email'))
	}

	return (
		<GuestLayout>
			<HTMLhead
				title={t('ui.forgot password')}
				description={t('seo.login.description')}
			/>

			<main className="min-h-screen px-6 grid grid-cols-1 place-content-center">
				<div className="mx-auto sm:max-w-sm">
					<div className="bg-white rounded-3xl shadow-stone-200 shadow-xl">
						<h1 className="bg-amber9 text-amber11 text-xl font-medium px-6 pt-5 pb-2 mb-3 rounded-t-3xl">
							{t('ui.forgot password')}
						</h1>

						<div className="px-6 pt-2 pb-8">
							<div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
								<p>{t('ui.forgot password intro')[0]}</p>
								<p>{t('ui.forgot password intro')[1]}</p>
							</div>

							{status && (
								<div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
									{status}
								</div>
							)}

							<form onSubmit={submit}>
								<div className="space-y-1">
									<InputLabel htmlFor="name" value={t('ui.email')} />

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

								{/* <TextInput
									id="email"
									type="email"
									name="email"
									value={data.email}
									className="mt-1 block w-full"
									isFocused={true}
									onChange={(e) => setData('email', e.target.value)}
								/>

								<InputError message={errors.email} className="mt-2" /> */}

								<div className="mt-7">
									<ButtonPrimary disabled={processing} className="w-full">
										{t('ui.recover password')}
									</ButtonPrimary>
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
		</GuestLayout>
	)
}
