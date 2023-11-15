import { faker } from '@faker-js/faker'
import axios from 'axios'
import { initialValues } from '.'


export const handleSubmit = async (values, actions) => {
	actions.setSubmitting(true)

	const resp = await axios.post(
		`${process.env.NEXT_PUBLIC_API_URL}/register`, 
		values
	)
	.then(resp => {
		return resp.data
	})
	.catch(err => {
		const error = err.response.data
		actions.setErrors(error.data)
		actions.setSubmitting(false)
		return error
	})

	return resp
}



export const setFakeData = () => {
	
	const firstname = faker.person.firstName()
	const lastname = faker.person.lastName()
	const password = faker.internet.password({ length: 8 })
	
	return {
		name: faker.internet.userName().toLowerCase(),
		firstname,
		lastname,
		email: faker.internet.email({
			firstName: firstname,
			lastName: lastname,
		}).toLowerCase(),
		password,
		password_confirmation: password,
		device_name: initialValues.device_name
	}
}