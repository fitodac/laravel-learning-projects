'use client'

import {  
	useState,
	Suspense
} from 'react'

import Link from 'next/link'

import {
	Formik,
	Form,
	Field,
	ErrorMessage
} from 'formik'

import { 
	handleSubmit,
	initialValues
} from './helpers'

import { 
	SideBackground,
	Loading,
	FormErrorMessage,
	FormSuccessMessage
} from '@/components'

import { passwordToggleVisibility } from '@/helpers'


export default function ResetPasswordPage({params})
{

	const [ fetchData, setFetchData ] = useState({})
	const { email, token } = params

	const submitForm = async (values, actions) => {
		setFetchData({})
		const resp = await handleSubmit({values, actions, email, token})
		console.log('resp', resp)
		setFetchData(resp)
	}


	return (
		<>
			<SideBackground />

			<Suspense>
				<div className="w-full px-6 py-20 min-h-full flex items-center xl:px-14">
					<div className="max-w-xs mx-auto relative">

						{ fetchData?.success ? (
							<>
								<FormSuccessMessage>
									<div className="text-indigo-500">{fetchData.message}</div>
									<p className="text-sm leading-tight">
										Por favor, ve a la página de <Link href="/login">Login</Link> 
										para acceder a tu cuenta.
									</p>
								</FormSuccessMessage>
							</>
						) : (
							<>
								<div className="page-title">Reset password</div>

								<Formik 
									initialValues={initialValues}
									onSubmit={submitForm}>
									{({ setValues, isSubmitting }) => ( 
										<Form className={`mt-4 ${isSubmitting ? 'opacity-20' : ''}`}>

											<Loading status={isSubmitting} />

											<div className="space-y-1">
												<div className="">
													<label>Password</label>
													<Field type="password" name="password" />
													
													<span 
														className="text-xs font-medium mt-1 flex justify-end cursor-pointer select-none"
														onClick={passwordToggleVisibility}>
														Show password
													</span>

													<ErrorMessage name="password">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
												</div>

												<div className="">
													<label>Confirm password</label>
													<Field type="password" name="password_confirmation" />
													<ErrorMessage name="password_confirmation">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
												</div>

												<div className="pt-5">
													<button type="submit" className="w-full">Reset password</button>
												</div>
											</div>

											{false === fetchData.success && (
												<FormErrorMessage>
													{fetchData.message}
												</FormErrorMessage>
											)}

										</Form>
									)}
								</Formik>

							</>
						)}
					</div>

				</div>
			</Suspense>
		</>
	)
}