import { createContext } from 'react'

export const myPetContext = createContext({
	name: '',
	user_id: '',
	picture: '',
	species: '',
	gender: '',
	description: '',
	breed_id: '',
	born_date: '',
})
