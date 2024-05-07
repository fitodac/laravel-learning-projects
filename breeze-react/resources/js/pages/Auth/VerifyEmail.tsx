import { FormEventHandler } from 'react'
import { t } from '@/i18n'
import { Link, useForm } from '@inertiajs/react'
import { Button } from '@nextui-org/react'
import { toast } from 'react-toastify'
import { AuthLayout } from './layout'
import { StatusMessage } from './components'

interface Props {
	status: string
}

const VerifyEmail = ({ status }: Props) => {
	const { post, processing } = useForm({})

	console.log('status', status)

	const submit: FormEventHandler = (e) => {
		e.preventDefault()

		post(route('verification.send'), {
			preserveScroll: true,
			onSuccess: () => {
				toast.success(`A new verification link has been sent to the email address you
					provided during registration.`)
			},
		})
	}

	return (
		<>
			<div className="w-72 space-y-7">
				<p>{t('email-verification-message')}</p>

				{status && <StatusMessage {...{ status }} />}

				<form onSubmit={submit}>
					<Button
						type="submit"
						color="primary"
						fullWidth
						isLoading={processing}
					>
						{t('Resend Verification Email')}
					</Button>
				</form>
			</div>

			<div className="text-center">
				<Link href={route('login')}>{t('Already registered?')}</Link>
			</div>
		</>
	)
}

VerifyEmail.layout = (page: JSX.Element) => (
	<AuthLayout {...{ children: page, pageTitle: t('Email Verification') }} />
)

export default VerifyEmail
