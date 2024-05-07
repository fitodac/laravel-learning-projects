import { useRef, FormEventHandler } from 'react'
import { t } from '@/i18n'
import { useForm } from '@inertiajs/react'
import {
	Input,
	Button,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from '@nextui-org/react'

export const DeleteAccount = (): JSX.Element => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const passwordInput = useRef<HTMLInputElement>(null)

	const {
		data,
		setData,
		delete: destroy,
		processing,
		reset,
		errors,
	} = useForm({
		password: '',
	})

	const submit: FormEventHandler = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<div className="text-danger space-y-5">
				<h3 className="font-semibold select-none">{t('Delete Account')}</h3>

				<div className="font-light leading-tight select-none">
					{t('delete-account-confirmation-message')}
				</div>

				<div className="md:flex justify-end">
					<div className="w-1/3">
						<Button color="danger" onPress={onOpen} fullWidth>
							Delete Account
						</Button>
					</div>
				</div>
			</div>

			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size="sm"
				isDismissable={false}
				isKeyboardDismissDisabled={true}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader>
								{t('delete-account-confirmation-title')}
							</ModalHeader>
							<ModalBody>
								<p>{t('delete-account-confirmation-message')}</p>

								<div className="space-y-1">
									<Input
										ref={passwordInput}
										id="password"
										type="password"
										name="password"
										label={t('Password')}
										value={data.password}
										errorMessage={errors.password}
										isInvalid={errors.password ? true : false}
										onChange={(e) => setData('password', e.target.value)}
									/>
								</div>
							</ModalBody>

							<ModalFooter>
								<Button
									color="danger"
									fullWidth
									type="submit"
									spinner={
										<i className="ri-loader-line ri-lg animate-spin"></i>
									}
									isLoading={processing}
								>
									{t('Delete')}
								</Button>

								<Button color="default" fullWidth onPress={onClose}>
									{t('Cancel')}
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
