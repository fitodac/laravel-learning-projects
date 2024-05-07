import { useState, FormEventHandler } from 'react'
import { PageProps } from '@/types'
import { t } from '@/i18n'
import { Button } from '@nextui-org/react'
import { useStoreMain } from '@/store'
import { useForm } from '@inertiajs/react'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

import email_check from '@/assets/img/email-check.svg'

export const VerifyEmail = ({
	mustVerifyEmail,
	status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>): JSX.Element => {
	const { auth } = useStoreMain()
	const { post, processing } = useForm()
	const [animate, setAnimate] = useState<{
		opacity?: number
		duration?: number
	}>({})

	const submit: FormEventHandler = (e) => {
		e.preventDefault()

		post(route('verification.send'), {
			preserveScroll: true,
			onSuccess: () => {
				setAnimate({
					opacity: 0,
					duration: 5,
				})

				toast.success(`A new verification link has been sent to the email address you
					provided during registration.`)
			},
		})
	}

	if (status === 'verification-link-sent') {
		return <></>
	}

	if (mustVerifyEmail && auth?.user?.email_verified_at === null) {
		return (
			<motion.div animate={animate} onAnimationComplete={() => {}}>
				<div className="flex items-center gap-x-10">
					<div className="">
						<img src={email_check} alt={t('Verify email')} className="w-24" />
					</div>

					<div className="space-y-3">
						<p>{t('Your email address is unverified')}</p>

						<div className="">
							<form onSubmit={submit}>
								<Button color="primary" type="submit" isLoading={processing}>
									{t('Resend Verification Email')}
								</Button>
							</form>
						</div>
					</div>
				</div>
			</motion.div>
		)
	} else {
		return <></>
	}
}
