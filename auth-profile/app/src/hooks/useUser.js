import axios from 'axios'
import { useToken } from '.'

export const useGetUser = async () => {

	const resp = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/profile`,
		{ 
			headers: {
				Authorization: useToken().get()
			}
		}
	)
	.then(resp => resp.data)
	.catch(err => err.response.data)

	return resp
}