import { useContext, useEffect, useState } from 'react'
import { myPetContext } from '.'
import { useForm } from '@inertiajs/react'

export const MyPetProvider = ({ children }) => {
	const context = useContext(myPetContext)
	const { data, setData, post, patch, processing, progress, errors } =
		useForm(context)

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(processing)
	}, [processing])

	const handleChange = (e) => {
		const { name, value } = e.target
		setData({ ...data, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// console.log('data:', data)
		// return

		if (data.id) {
			patch(
				route('user.pets.update', { user: user.username, pet: data.id }),
				data,
				{
					headers: { 'Content-Type': 'application/json' },
				}
			)
		} else {
			post(route('user.pets.store', { user: user.username }))
		}
	}

	return (
		<myPetContext.Provider
			value={{
				data,
				setData,
				processing,
				errors,
				loading,
				setLoading,
				handleChange,
				handleSubmit,
			}}
		>
			{children}
		</myPetContext.Provider>
	)
}