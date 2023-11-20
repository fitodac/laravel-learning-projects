'use client'

import {  
	useState,
	Suspense
} from 'react'

import {
	Formik,
	Form,
	Field,
	ErrorMessage
} from 'formik'

import { handleSubmit } from './helpers'

import { 
	SideBackground, 
	Loading,
	FormErrorMessage
} from '@/components'


export default function ResetPasswordPage()
{

	const [ fetchData, setFetchData ] = useState({})

	const submitForm = async (values, actions) => {
		setFetchData({})
		const resp = await handleSubmit(values, actions)
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
								<div className="space-y-1">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-green-600 w-10">
											<path d="M22 14H20V7.23792L12.0718 14.338L4 7.21594V19H14V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V14ZM4.51146 5L12.0619 11.662L19.501 5H4.51146ZM19 22L15.4645 18.4645L16.8787 17.0503L19 19.1716L22.5355 15.636L23.9497 17.0503L19 22Z"></path>
										</svg>
									</div>
									
									<div className="text-green-600 leading-tight">
										{ fetchData.message }
									</div>
								</div>
							</>
						) : (
							<>
								<div className="page-title">Recuperar mi contraseña</div>

								<div className="text-sm leading-tight space-y-2 mt-2">
									<p>Ingresa el email con el que te registraste.</p>
									<p>Recibirás un correo con instrucciones para recuperar tu contraseña.</p>
								</div>

								<Formik 
									initialValues={{email: 'wisozk.bridget@example.com'}}
									onSubmit={submitForm}>
									{({ isSubmitting }) => (
										<Form className={`mt-4 ${isSubmitting ? 'opacity-20' : ''}`}>

											<Loading status={isSubmitting} />

											<div className="">
												<label>Email</label>
												<Field type="email" name="email" autoComplete="off" />
												<ErrorMessage name="email">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
											</div>

											<div className="">
												<button type="submit" className="w-full">Recuperar contraseña</button>
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