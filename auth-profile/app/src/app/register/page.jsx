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
	initialValues,
	handleSubmit,
	setFakeData
} from './helpers'

import { 
	SideBackground,
	Loading,
	FormSuccessMessage
} from '@/components'

import { useEmailVerifyToken } from '@/hooks'

import { passwordToggleVisibility } from '@/helpers'


export default function RegisterPage()
{

	const [ fetchData, setFetchData ] = useState({})

	const submitForm = async (values, actions) => {
		const resp = await handleSubmit(values, actions)
		if( resp.success ){
			const { token, token_type } = resp.data
			setFetchData(resp)
			useEmailVerifyToken({token, token_type}).store()
		}
	}


	return (
		<>
			<SideBackground />

			<Suspense>
				<div className="w-full px-6 pt-20 pb-20 mx-auto xl:px-14">
					<div className="page-title">Registrarme</div>

					<Formik 
						initialValues={initialValues}
						onSubmit={submitForm}>
						{({ setValues, isSubmitting }) => ( 
							<Form className={`mt-4 ${isSubmitting ? 'opacity-20' : ''}`}>
								
								<Loading status={isSubmitting} />

								{ !fetchData.success ? (

									<div className={`space-y-3 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-3 md:space-y-0 ${isSubmitting ? 'opacity-20' : ''}`}>
										<div className="">
											<label>Nombre de usuario</label>
											<Field type="text" name="name" autoComplete="off" />
											<ErrorMessage name="name">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
										</div>

										<div className="">
											<label>Email</label>
											<Field type="email" name="email" autoComplete="off" />
											<ErrorMessage name="email">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
										</div>
										
										<div className="">
											<label>Nombre</label>
											<Field type="text" name="firstname" autoComplete="off" />
											<ErrorMessage name="firstname">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
										</div>

										<div className="">
											<label>Apellido</label>
											<Field type="text" name="lastname" autoComplete="off" />
											<ErrorMessage name="lastname">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
										</div>

										<div className="">
											<label>Contraseña</label>
											<Field type="password" name="password" />
											
											<span 
												className="text-xs font-medium mt-1 flex justify-end cursor-pointer select-none"
												onClick={passwordToggleVisibility}>
												Ver contraseña
											</span>

											<ErrorMessage name="password">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
										</div>

										<div className="">
											<label>Confirma tu contraseña</label>
											<Field type="password" name="password_confirmation" />
											<ErrorMessage name="password_confirmation">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
										</div>

										<Field type="hidden" name="device_name" />

										<div className="pt-3 flex justify-between items-center gap-x-6 md:col-span-2">
											<button type="submit">Register</button>
											<span
												className="text-sm font-medium leading-tight block select-none cursor-pointer hover:text-indigo-500"
												onClick={() => {
													setValues(setFakeData())
												}}>
												Autocompletar el formulario con datos random
											</span>
										</div>

									</div>

								) : (
									<FormSuccessMessage>
										<p className="notification-title">Tu cuenta ha sido creada con éxito</p>
										<p>Por favor, revisa tu email para confirmar tu cuenta antes de ingresar.</p>
									</FormSuccessMessage>

								) }
							</Form>
						)}
					</Formik>
					
					<div className="flex justify-center pt-12">
						<Link 
							href="/login"
							className="text-indigo-500 text-sm font-medium">
							Ya tengo una cuenta
						</Link>
					</div>
				</div>

			</Suspense>
		</>
	)
}