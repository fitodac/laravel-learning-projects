import { FormEventHandler } from 'react'
import { t } from '@/i18n'
import { Link, useForm, usePage } from '@inertiajs/react'
import { Input, Button } from '@nextui-org/react'
import type { PageProps } from '@/types'

interface Props {
	mustVerifyEmail: boolean
	status?: string
}

export const UpdateProfile = ({ mustVerifyEmail, status }: Props) => {
	const user = usePage<PageProps>().props.auth.user

	const {
		data,
		setData,
		patch,
		errors,
		processing,
		recentlySuccessful,
		isDirty,
	} = useForm({
		name: user.name,
		email: user.email,
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
							onValueChange={(e) => setData('name', e)}
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
							onValueChange={(e) => setData('email', e)}
						/>
					</fieldset>

					<div className="md:flex justify-end">
						<div className="w-1/3">
							<Button
								fullWidth
								color="primary"
								type="submit"
								isDisabled={!isDirty}
								spinner={<i className="ri-loader-line ri-lg animate-spin"></i>}
								isLoading={processing}
							>
								{t('Save')}
							</Button>
						</div>
					</div>
				</div>
			</form>

			{mustVerifyEmail && user.email_verified_at === null && (
				<div>
					{status !== 'verification-link-sent' ? (
						<p className="text-danger text-sm mt-2">
							{t('Your email address is unverified')}{' '}
							<Link
								href={route('verification.send')}
								method="post"
								as="button"
								className="underline text-sm"
							>
								{t('email-verify-link')}
							</Link>
						</p>
					) : (
						<div className="mt-2 font-medium text-sm text-green-600">
							{t('verification-link-sent-notice')}
						</div>
					)}
				</div>
			)}
		</div>
	)
}
