'use client'

import { 
	useContext, 
	Suspense 
} from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import {
	Formik,
	Form,
	Field,
	ErrorMessage
} from 'formik'

import { 
	initialValues,
	handleSubmit
} from './helpers'

import { 
	SideBackground,
	Loading
} from '@/components'

import { MainContext } from '@/context'
import { useToken } from '@/hooks'


export default function LoginPage()
{

	const { 
		auth,
		setUser,
		setAuth
	} = useContext(MainContext)

	const submitForm = async (values, actions) => {
		const resp = await handleSubmit(values, actions)
		
		if( resp.success ){
			const { token, token_type } = resp.data
			useToken({token, token_type}).store()
			setUser(resp.data.user)
			setAuth(true)
			// router.push('/my-account')
		}
	}


	if( auth ) redirect('/my-account')

	return (
		<>
			<SideBackground />

			<Suspense>
				<div className="w-full px-6 py-20 min-h-full flex items-center xl:px-14">
					<div className="max-w-xs mx-auto">
						<div className="page-title">Entrar</div>

						<Formik 
							initialValues={initialValues}
							onSubmit={submitForm}>
							{({ setValues, isSubmitting }) => (
								<Form className={`mt-4 ${isSubmitting ? 'opacity-20' : ''}`}>

									<Loading status={isSubmitting} />


									<div className="space-y-3">

										<div>
											<label>Email</label>
											<Field type="email" name="email" autoComplete="off" />
											<ErrorMessage name="email">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
										</div>

										<div>
											<label>Contraseña</label>
											<Field type="password" name="password" />
											<ErrorMessage name="password">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
										</div>

										<div className="">
											<label className="flex items-center gap-x-2 cursor-pointer">
												<Field type="checkbox" name="remember" id="remember" />
												<span>Recordarme</span>
											</label>
										</div>

										<div className="pt-3">
											<button type="submit" className="w-full">Entrar</button>
										</div>
									</div>
								</Form>
							)}
						</Formik>

						<div className="space-y-2 pt-8">
							<div>
								<Link 
									href="/forgot-password"
									className="text-indigo-500 text-sm font-medium">
									¿Olvidaste tu contraseña?
								</Link>
							</div>

							<div>
								<Link 
									href="/register"
									className="text-indigo-500 text-sm font-medium">
									Aún no tengo una cuenta
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Suspense>
		</>
	)
}