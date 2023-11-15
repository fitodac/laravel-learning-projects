'use client'

const Token = ({name, token}) => ({
	store: () => {
		return localStorage.setItem(`${process.env.NEXT_PUBLIC_PREFIX}_${name}`, token)
	},

	get: () => {
		return localStorage.getItem(`${process.env.NEXT_PUBLIC_PREFIX}_${name}`)
	},

	remove: () => {
		localStorage.removeItem(`${process.env.NEXT_PUBLIC_PREFIX}_${name}`)
	},
})


export const useToken = (props) => {
	return Token({
		name: 'token',
		token: `${props?.token_type} ${props?.token}`
	})
}


export const useEmailVerifyToken = (props) => {
	return Token({
		name: 'email_verification_token',
		token: `${props?.token_type} ${props?.token}`
	})
}