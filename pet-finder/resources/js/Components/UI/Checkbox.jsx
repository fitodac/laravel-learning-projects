const inputClass = `border-gray-300 text-yellow-500 rounded-md 
focus:ring-0 focus:outline-0 focus:shadow-none focus:active:shadow-none`

export const Checkbox = ({ className = '', label = '', ...props }) => {
	return (
		<>
			<label className="inline-flex items-center select-none cursor-pointer">
				<input {...props} type="checkbox" className={inputClass + className} />
				<span className="ms-2 text-sm leading-tight top-px relative">
					{label}
				</span>
			</label>
		</>
	)
}
