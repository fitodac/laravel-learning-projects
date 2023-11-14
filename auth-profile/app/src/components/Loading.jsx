export const Loading = ({status}) => {

	if( status ){
		return (
			<div className="grid place-content-center inset-0 absolute">
				<svg 
					xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 24 24"
					className="fill-indigo-400 w-12 animate-spin">
					<path d="M12 3C16.9706 3 21 7.02944 21 12H19C19 8.13401 15.866 5 12 5V3Z"></path>
				</svg>
			</div>
		)
	}
	
	return null
}