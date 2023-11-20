export const passwordToggleVisibility = () => {
	const type = document.querySelector('[name=password]').getAttribute('type')
	document.querySelector('[name=password]').setAttribute('type', type === 'password' ? 'text' : 'password')
	document.querySelector('[name=password_confirmation]').setAttribute('type', type === 'password' ? 'text' : 'password')
}