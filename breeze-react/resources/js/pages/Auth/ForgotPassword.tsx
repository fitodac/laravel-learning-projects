import { useRef, useEffect, FormEventHandler } from 'react'
import { Link, useForm } from '@inertiajs/react'
import { t } from '@/i18n'
import { Input, Button } from '@nextui-org/react'
import { AuthLayout } from './layout'
import { StatusMessage } from './components'

interface Props {
	status: string
}

const ForgotPassword = ({ status }: Props) => {
	const { data, setData, post, processing, errors, reset } = useForm({
		email: '',
	})

	const inputEmail = useRef<HTMLInputElement>(null)

	useEffect(() => {
		inputEmail.current?.focus()
	}, [])

	const submit: FormEventHandler = (e) => {
		e.preventDefault()

		post(route('password.email'), {
			onSuccess: () => reset(),
		})
	}

	return (
		<>
			<div className="w-72 space-y-7">
				<div className="text-sm leading-tight">
					{t('forgot-password-message')}
				</div>

				{status && <StatusMessage {...{ status }} />}

				<form onSubmit={submit}>
					<div className="space-y-4">
						<fieldset className="space-y-1">
							<Input
								id="email"
								type="email"
								name="email"
								label="Email"
								value={data.email}
								ref={inputEmail}
								isInvalid={errors.email ? true : false}
								errorMessage={errors.email}
								onChange={(e) => setData('email', e.target.value)}
							/>
						</fieldset>

						<Button
							color="primary"
							fullWidth
							type="submit"
							spinner={<i className="ri-loader-line ri-lg animate-spin"></i>}
							isLoading={processing}
						>
							{t('Email password reset link')}
						</Button>
					</div>
				</form>

				<div className="space-y-1.5">
					<div>
						<Link href={route('login')}>{t('Already registered?')}</Link>
					</div>

					<div>
						<Link href={route('register')}>{t("Don't have an Account?")}</Link>
					</div>
				</div>
			</div>
		</>
	)
}

ForgotPassword.layout = (page: JSX.Element) => (
	<AuthLayout {...{ children: page, pageTitle: t('Forgot your password?') }} />
)

export default ForgotPassword
