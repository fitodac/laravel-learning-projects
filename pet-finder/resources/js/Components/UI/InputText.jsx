import { forwardRef, useEffect, useRef } from 'react'

export const InputText = forwardRef(function InputText(
	{ type = 'text', className = '', isFocused = false, ...props },
	ref
) {
	const input = ref ? ref : useRef()

	useEffect(() => {
		if (isFocused) {
			input.current.focus()
		}
	}, [])

	return (
		<>
			<input
				{...props}
				type={type}
				className={
					'bg-stone-200 border-stone-200 transition-all rounded-xl focus:border-stone-200 focus:outline-0 ' +
					className
				}
				ref={input}
			/>
		</>
	)
})
