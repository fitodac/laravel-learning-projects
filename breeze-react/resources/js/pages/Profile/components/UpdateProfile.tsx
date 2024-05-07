import { FormEventHandler } from 'react'
import { t } from '@/i18n'
import { useForm } from '@inertiajs/react'
import { Input, Button } from '@nextui-org/react'
import { useStoreMain } from '@/store'

export const UpdateProfile = ({
	mustVerifyEmail,
	status,
}: {
	mustVerifyEmail: boolean
	status?: string
}) => {
	const { auth } = useStoreMain()

	const { data, setData, patch, errors, processing, recentlySuccessful } =
		useForm({
			name: auth?.user ? auth.user.name : '',
			email: auth?.user ? auth.user.email : '',
		})

	const submit: FormEventHandler = (e) => {
		e.preventDefault()
		patch(route('profile.update'))
	}

	return (
		<div className="space-y-5">
			<h3 className="font-semibold select-none">{t('Profile information')}</h3>

			<div className="font-light leading-tight select-none">
				{t('profile-information-intro')}
			</div>

			<form onSubmit={submit}>
				<div className="space-y-5">
					<fieldset className="space-y-1">
						<Input
							id="name"
							type="text"
							name="name"
							label={t('Username')}
							value={data.name}
							isInvalid={errors.name ? true : false}
							errorMessage={errors.name}
							onChange={(e) => setData('name', e.target.value)}
						/>
					</fieldset>

					<fieldset className="space-y-1">
						<Input
							id="email"
							type="email"
							name="email"
							label="Email"
							value={data.email}
							isInvalid={errors.email ? true : false}
							errorMessage={errors.email}
							onChange={(e) => setData('email', e.target.value)}
						/>
					</fieldset>

					<div className="md:flex justify-end">
						<div className="w-1/3">
							<Button
								fullWidth
								color="primary"
								type="submit"
								spinner={<i className="ri-loader-line ri-lg animate-spin"></i>}
								isLoading={processing}
							>
								{t('Save')}
							</Button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}
