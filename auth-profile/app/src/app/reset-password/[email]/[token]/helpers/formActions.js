import axios from 'axios'


export const handleSubmit = async ({
	values, 
	actions,
	email,
	token
}) => {
	actions.setSubmitting(true)

	const resp = await axios.post(
		`${process.env.NEXT_PUBLIC_API_URL}/reset-password`, 
		values,
		{
			params: {
				email: decodeURIComponent(email.replace(/\+/g, " ")),
				token
			}
		}
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