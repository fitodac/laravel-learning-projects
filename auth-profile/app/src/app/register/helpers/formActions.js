import { faker } from '@faker-js/faker'


export const handleSubmit = (values, actions) => {
	console.log('values', values)
	actions.setSubmitting(true)
	setTimeout(() => { actions.setSubmitting(false) }, 1000)
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
		password_confirmation: password
	}
}