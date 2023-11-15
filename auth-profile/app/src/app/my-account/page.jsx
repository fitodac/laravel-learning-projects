'use client'

import { redirect } from 'next/navigation'
import { useContext } from 'react'
import { MainContext } from '@/context'

import {
	Formik,
	Form,
	Field
} from 'formik'

import {
	initialValues,
	handleSubmit
} from './helpers'

import { SideBackground } from '@/components/SideBackground'
import { ProfileImage } from './components/ProfileImage'




export default function ProfilePage()
{

	const { auth } = useContext(MainContext)

	if( !auth ) redirect('/')
	
	return (
		<>
			<SideBackground />

			<div className="w-full px-6 pt-20 pb-20 mx-auto xl:px-14">
				<div className="page-title">My account</div>

				<div className="max-w-xl mt-5">
					<ProfileImage />
				</div>
				
				<Formik 
					initialValues={initialValues}
					onSubmit={handleSubmit}>
					{({handleChange, handleBlur, isSubmitting, values, errors }) => ( 
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

								<div className="pt-3">
									<button type="submit">Update</button>
								</div>

							</div>
						</Form>
					)}
				</Formik>
			</div>
		</>
	)

}