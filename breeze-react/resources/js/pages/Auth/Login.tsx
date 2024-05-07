import { useEffect, useRef, useState, type FormEventHandler } from 'react'
import { Link, useForm } from '@inertiajs/react'
import { t } from '@/i18n'
import { Input, Button, Switch } from '@nextui-org/react'
import { AuthLayout } from './layout'
import { StatusMessage } from './components'

interface Props {
	status: string
	canResetPassword: boolean
}

const Login = ({ status, canResetPassword }: Props) => {
	const { data, setData, post, processing, errors, reset } = useForm({
		email: '',
		password: '',
		remember: false,
	})

	const [pwdVisibility, setPwdVisibility] = useState<boolean>(false)
	const inputEmail = useRef<HTMLInputElement>(null)

	useEffect(() => {
		inputEmail.current?.focus()

		return () => {
			reset('password')
		}
	}, [])

	const submit: FormEventHandler = (e) => {
		e.preventDefault()

		post(route('login'))
	}

	return (
		<>
			<div className="w-72 space-y-7">
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
								onValueChange={(e) => setData('email', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<Input
								id="password"
								type={pwdVisibility ? 'text' : 'password'}
								name="password"
								label={t('Password')}
								value={data.password}
								isInvalid={errors.password ? true : false}
								onValueChange={(e) => setData('password', e)}
								errorMessage={errors.password}
								endContent={
									<button
										type="button"
										tabIndex={-1}
										onClick={() => setPwdVisibility(!pwdVisibility)}
									>
										{pwdVisibility ? (
											<i className="ri-eye-fill ri-lg text-primary"/>
										) : (
											<i className="ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600"/>
										)}
									</button>
								}
							/>
						</fieldset>

						<div className="">
							<Switch
								name="remember"
								aria-label={t('Remember me')}
								size="sm"
								value={data.remember ? '1' : '0'}
								tabIndex={2}
								onChange={(e) => setData('remember', e.target.checked)}
							>
								{t('Remember me')}
							</Switch>
						</div>

						<Button
							color="primary"
							fullWidth
							type="submit"
							spinner={<i className="ri-loader-line ri-lg animate-spin"></i>}
							isLoading={processing}
						>
							{t('Log in')}
						</Button>

						{canResetPassword && (
							<div className="space-y-1.5">
								<div>
									<Link href={route('password.request')}>
										{t('Forgot your password?')}
									</Link>
								</div>

								<div>
									<Link href={route('register')}>
										{t("Don't have an Account?")}
									</Link>
								</div>
							</div>
						)}
					</div>
				</form>
			</div>
		</>
	)
}

Login.layout = (page: JSX.Element) => (
	<AuthLayout {...{ children: page, pageTitle: t('Log in') }} />
)

export default Login
