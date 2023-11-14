import axios from 'axios'
import { useEmailVerifyToken } from '@/hooks'

export const validateEmail = async ({
	id,
	hash,
	expires,
	signature
}) => {
	if( id && hash && expires && signature && useEmailVerifyToken().get() ){
		const resp = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}/email/verify/${id}/${hash}`,
			null,
			{
				headers: {
					Authorization: useEmailVerifyToken().get()
				},
				params: {
					expires,
					signature
				}
			}
		)
		.then(resp => {
			console.log('resp', resp)
			return resp.data
		})
		.catch(err => {
			console.log('error', err.response.data)
			return err.response.data
		})

		return resp
	} else {
		return null
	}
}