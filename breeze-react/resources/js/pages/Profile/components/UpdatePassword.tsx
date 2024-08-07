import { useRef, useState, FormEventHandler } from 'react'
import { t } from '@/i18n'
import { useForm } from '@inertiajs/react'
import { Input, Button } from '@nextui-org/react'

export const UpdatePassword = () => {
	const passwordInput = useRef<HTMLInputElement>(null)
	const currentPasswordInput = useRef<HTMLInputElement>(null)
	const [success, setSuccess] = useState(false)

	const {
		data,
		setData,
		errors,
		put,
		reset,
		processing,
		recentlySuccessful,
		isDirty,
	} = useForm({
		current_password: '',
		password: '',
		password_confirmation: '',
	})

	const submit: FormEventHandler = (e) => {
		e.preventDefault()

		put(route('password.update'), {
			preserveScroll: true,
			onSuccess: () => {
				reset()
				setSuccess(true)
				setTimeout(() => setSuccess(false), 4000)
			},
			onError: (errors) => {
				if (errors.password) {
					reset('password', 'password_confirmation')
					passwordInput.current?.focus()
				}

				if (errors.current_password) {
					reset('current_password')
					currentPasswordInput.current?.focus()
				}
			},
		})
	}

	return (
		<div className="space-y-5">
			<h3 className="font-semibold select-none">{t('Update Password')}</h3>

			<div className="font-light leading-tight select-none">
				{t('update-password-description')}
			</div>

			{success && (
				<p className="text-success">{t('password-updated-message')}</p>
			)}

			<div className="mt-3">
				<form onSubmit={submit}>
					<div className="space-y-4">
						<fieldset className="space-y-1">
							<Input
								ref={currentPasswordInput}
								id="current_password"
								type="password"
								name="current_password"
								label={t('Current Password')}
								value={data.current_password}
								errorMessage={errors.current_password}
								isInvalid={errors.current_password ? true : false}
								onValueChange={(e) => setData('current_password', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<Input
								ref={passwordInput}
								id="password"
								type="password"
								name="password"
								label={t('New Password')}
								value={data.password}
								errorMessage={errors.password}
								isInvalid={errors.password ? true : false}
								onValueChange={(e) => setData('password', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<Input
								id="password_confirmation"
								type="password"
								name="password_confirmation"
								label={t('Confirm Password')}
								value={data.password_confirmation}
								errorMessage={errors.password_confirmation}
								isInvalid={errors.password_confirmation ? true : false}
								onValueChange={(e) => setData('password_confirmation', e)}
							/>
						</fieldset>

						<div className="md:flex justify-end">
							<div className="w-1/3">
								<Button
									fullWidth
									color="primary"
									type="submit"
									isDisabled={!isDirty}
									spinner={
										<i className="ri-loader-line ri-lg animate-spin"></i>
									}
									isLoading={processing}
								>
									{t('Save')}
								</Button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
