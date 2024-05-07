import { useEffect, useState, type FormEventHandler } from 'react'
import { useForm } from '@inertiajs/react'
import { t } from '@/i18n'
import { Input, Button } from '@nextui-org/react'
import { AuthLayout } from './layout'

interface Props {
	token: string
	email: string
}

const ResetPassword = ({ token, email }: Props) => {
	const { data, setData, post, processing, errors, reset } = useForm({
		token: token,
		email: email,
		password: '',
		password_confirmation: '',
	})

	const [pwdVisibility, setPwdVisibility] = useState<boolean>(false)

	useEffect(() => {
		return () => {
			reset('password', 'password_confirmation')
		}
	}, [])

	const submit: FormEventHandler = (e) => {
		e.preventDefault()

		post(route('password.store'))
	}

	return (
		<>
			<div className="w-72 space-y-7">
				<form onSubmit={submit}>
					<div className="space-y-4">
						<fieldset className="space-y-1">
							<Input
								id="email"
								type="email"
								name="email"
								label="Email"
								value={data.email}
								autoComplete="username"
								errorMessage={errors.email}
								isInvalid={errors.email ? true : false}
								onChange={(e) => setData('email', e.target.value)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<Input
								id="password"
								type={pwdVisibility ? 'text' : 'password'}
								name="password"
								label={t('Password')}
								value={data.password}
								errorMessage={errors.password}
								isInvalid={errors.password ? true : false}
								onChange={(e) => setData('password', e.target.value)}
								endContent={
									<button
										type="button"
										onClick={() => setPwdVisibility(!pwdVisibility)}
									>
										{pwdVisibility ? (
											<i className="ri-eye-fill ri-lg text-primary" />
										) : (
											<i className="ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600" />
										)}
									</button>
								}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<Input
								id="password"
								type={pwdVisibility ? 'text' : 'password'}
								name="password_confirmation"
								label={t('Confirm password')}
								value={data.password_confirmation}
								errorMessage={errors.password_confirmation}
								isInvalid={errors.password ? true : false}
								onChange={(e) =>
									setData('password_confirmation', e.target.value)
								}
								endContent={
									<button
										type="button"
										onClick={() => setPwdVisibility(!pwdVisibility)}
									>
										{pwdVisibility ? (
											<i className="ri-eye-fill ri-lg text-primary" />
										) : (
											<i className="ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600" />
										)}
									</button>
								}
							/>
						</fieldset>

						<Button
							color="primary"
							fullWidth
							type="submit"
							spinner={<i className="ri-loader-line ri-lg animate-spin"></i>}
							isLoading={processing}
						>
							{t('Reset Password')}
						</Button>
					</div>
				</form>
			</div>
		</>
	)
}

ResetPassword.layout = (page: JSX.Element) => (
	<AuthLayout {...{ children: page, pageTitle: t('Reset password') }} />
)

export default ResetPassword
