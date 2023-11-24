export const inputChange = (e) => {
	const { name, value } = e.target
	return { [name]: value }
}

export const inputChangeFile = (e) => {
	const { name, files } = e.target
	return { [name]: files[0] }
}
