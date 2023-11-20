export const FormErrorMessage = ({message}) => {
	return (
		<div className="bg-red-100 text-red-600 text-sm leading-tight px-4 py-2 mt-8 rounded-md">
			<div className="select-none">
				{message}
			</div>
		</div>
	)
}