'use client'

import {
	Formik,
	Form,
	Field
} from 'formik'

import { 
	initialValues,
	handleSubmit,
	setFakeData,
} from './helpers'

import { SideBackground } from '@/components/SideBackground'


export default function RegisterPage()
{

	return (
		<>
			<SideBackground />

			<div className="w-full px-6 pt-20 pb-20 mx-auto xl:px-14">
				<div className="page-title">Create Account</div>

				<Formik 
					initialValues={initialValues}
					onSubmit={handleSubmit}>
					{({handleChange, handleBlur, setValues, isSubmitting, values, errors }) => ( 
						<Form className={`max-w-xl mt-7 ${isSubmitting ? 'opacity-20' : ''}`}>
							<div className="space-y-3 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-3 md:space-y-0">

								<div className="">
									<label>Username</label>
									<Field type="text" name="name" autoComplete="off" />
								</div>

								<div className="">
									<label>Email</label>
									<Field type="email" name="email" autoComplete="off" />
								</div>
								
								<div className="">
									<label>First name</label>
									<Field type="text" name="firstname" autoComplete="off" />
								</div>

								<div className="">
									<label>Last name</label>
									<Field type="text" name="lastname" autoComplete="off" />
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
								</div>

								<div className="">
									<label>Confirm password</label>
									<Field type="password" name="password_confirmation" />
								</div>

								<div className="pt-3 flex justify-between items-center gap-x-6 md:col-span-2">
									<button>Register</button>
									<span
										className="text-sm font-medium leading-tight block select-none cursor-pointer hover:text-indigo-500"
										onClick={() => {
											setValues(setFakeData())
										}}>
										Auto complete form with fake data
									</span>
								</div>

							</div>
						</Form>
					)}
				</Formik>
			</div>
		</>
	)
}