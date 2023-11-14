const {
	platform,
	brands
} = window.navigator.userAgentData

export const initialValues = {
	name: 									'',
	firstname: 							'',
	lastname: 							'',
	email: 									'',
	password: 							'',
	password_confirmation: 	'',
	device_name: 						`${brands[0].brand}|${platform}`
}