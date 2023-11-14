'use client'

import { useState, useContext } from 'react'

import {
	Formik,
	Form,
	Field,
	ErrorMessage
} from 'formik'

import { 
	initialValues,
	handleSubmit,
	setFakeData,
} from './helpers'

import { 
	SideBackground,
	Loading
} from '@/components'
import { Suspense } from 'react'
import { useRouter } from 'next/navigation'
import { MainContext } from '@/context'


export default function RegisterPage()
{

	const router = useRouter()
	const { setUser } = useContext(MainContext)
	const [ fetchData, setFetchData ] = useState({})

	const submitForm = async (values, actions) => {
		const resp = await handleSubmit(values, actions)
		if( resp.success ){
			const { token, token_type } = resp.data
			setFetchData(resp)
			setUser(`${token_type} ${token}`)
			console.log('resp', resp)
			// router.push('/register/success')
		}
	}


	return (
		<>
			<SideBackground />

			<Suspense>
				<div className="w-full px-6 pt-20 pb-20 mx-auto xl:px-14">
					<div className="page-title">Create Account</div>

					<Formik 
						initialValues={initialValues}
						onSubmit={submitForm}>
						{({setValues, isSubmitting }) => ( 
							<Form className="max-w-xl mt-7 relative">
								
								<Loading status={isSubmitting} />

								{ !fetchData.success ? (

									<div className={`space-y-3 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-3 md:space-y-0 ${isSubmitting ? 'opacity-20' : ''}`}>
										<div className="">
											<label>Username</label>
											<Field type="text" name="name" autoComplete="off" />
											<ErrorMessage name="name">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
										</div>

										<div className="">
											<label>Email</label>
											<Field type="email" name="email" autoComplete="off" />
											<ErrorMessage name="email">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
										</div>
										
										<div className="">
											<label>First name</label>
											<Field type="text" name="firstname" autoComplete="off" />
											<ErrorMessage name="firstname">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
										</div>

										<div className="">
											<label>Last name</label>
											<Field type="text" name="lastname" autoComplete="off" />
											<ErrorMessage name="lastname">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
										</div>

										<div className="">
											<label>Password</label>
											<Field type="password" name="password" />
											
											<span 
												className="text-xs font-medium mt-1 flex justify-end cursor-pointer select-none"
												onClick={() => {
													const type = document.querySelector('[name=password]').getAttribute('type')
													document.querySelector('[name=password]').setAttribute('type', type === 'password' ? 'text' : 'password')
												}}>
												Show password
											</span>

											<ErrorMessage name="password">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
										</div>

										<div className="">
											<label>Confirm password</label>
											<Field type="password" name="password_confirmation" />
											<ErrorMessage name="password_confirmation">{msg => <div className="input-error">{msg}</div>}</ErrorMessage>
										</div>

										<div className="pt-3 flex justify-between items-center gap-x-6 md:col-span-2">
											<button type="submit">Register</button>
											<span
												className="text-sm font-medium leading-tight block select-none cursor-pointer hover:text-indigo-500"
												onClick={() => {
													setValues(setFakeData())
												}}>
												Auto complete form with fake data
											</span>
										</div>

									</div>

								) : (

									<div className="w-full max-w-xl mx-auto py-32">
										<div className="select-none-">
											<p className="text-green-500 text-xl">Your account has been created successfully</p>
											<p>Please check your email to confirm your account before log in.</p>
										</div>
									</div>

								) }
							</Form>
						)}
					</Formik>
				</div>
			</Suspense>
		</>
	)
}