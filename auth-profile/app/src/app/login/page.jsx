'use client'

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


export default function LoginPage()
{
	return (
		<>
			<SideBackground />

			<div className="w-full px-6 py-20 min-h-full mx-auto flex items-center xl:px-14">
				<div>
					<div className="page-title">Log In</div>

					<Formik 
						initialValues={initialValues}
						onSubmit={handleSubmit}>
						{({handleChange, isSubmitting, values, errors }) => (
						<Form className={`mt-4 ${isSubmitting ? 'opacity-20' : ''}`}>
							<div className="max-w-xs space-y-3">

								<div className="">
									<label>Email</label>
									<Field type="email" name="email" autoComplete="off" />
								</div>

								<div className="">
									<label>Password</label>
									<Field type="password" name="password" />
								</div>

								<div className="">
									<label className="flex items-center gap-x-2 cursor-pointer">
										<Field type="checkbox" name="remember" id="remember" />
										<span>Remeber me</span>
									</label>
								</div>

								<div className="pt-3">
									<button className="w-full">Log In</button>
								</div>
							</div>
						</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	)
}