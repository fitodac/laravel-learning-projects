import { useEffect, useState, FormEventHandler } from 'react'
import { t } from '@/i18n'
import { Link, useForm } from '@inertiajs/react'
import { Input, Button } from '@nextui-org/react'
import { AuthLayout } from './layout'

const Register = () => {
	const { data, setData, post, processing, errors, reset } = useForm({
		name: '',
		email: '',
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

		post(route('register'))
	}

	return (
		<>
			<div className="w-72 space-y-7">
				<form onSubmit={submit}>
					<div className="space-y-4">
						<fieldset className="space-y-1">
							<Input
								id="name"
								name="name"
								type="text"
								label={t('Name')}
								value={data.name}
								isInvalid={errors.name ? true : false}
								errorMessage={errors.name}
								onValueChange={(e) => setData('name', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<Input
								id="email"
								name="email"
								type="email"
								label="Email"
								value={data.email}
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
								errorMessage={errors.password}
								onValueChange={(e) => setData('password', e)}
								endContent={
									<button
										type="button"
										tabIndex={-1}
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
								id="password_confirmation"
								name="password_confirmation"
								type={pwdVisibility ? 'text' : 'password'}
								label={t('Confirm password')}
								value={data.password_confirmation}
								errorMessage={errors.password_confirmation}
								isInvalid={errors.password_confirmation ? true : false}
								onValueChange={(e) =>
									setData('password_confirmation', e)
								}
								endContent={
									<button
										type="button"
										tabIndex={-1}
										onClick={() => setPwdVisibility(!pwdVisibility)}
									>
										{pwdVisibility ? (
											<i className="ri-eye-fill ri-lg text-primary"></i>
										) : (
											<i className="ri-eye-off-fill ri-lg text-black/20"></i>
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
							{t('Register me')}
						</Button>

						<div className="text-center">
							<Link href={route('login')}>{t('Already registered?')}</Link>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

Register.layout = (page: JSX.Element) => (
	<AuthLayout {...{ children: page, pageTitle: t('Register') }} />
)
export default Register
