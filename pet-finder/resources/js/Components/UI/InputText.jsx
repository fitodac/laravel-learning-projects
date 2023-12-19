import { forwardRef, useEffect, useRef } from 'react'
import { TextFieldRoot, TextFieldSlot, TextFieldInput } from '@/components'

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
			<TextFieldRoot size="3" className={className} radius="large">
				<TextFieldInput
					type={type}
					{...props}
					ref={input}
					radius="large"
					variant="soft"
					className={`bg-stone-200 border-stone-200 font-medium focus:shadow-[0_2px_3px_#999_inset]`}
				/>
			</TextFieldRoot>

			{/* className={
						' transition-all rounded-xl focus:border-stone-200 focus:outline-0 ' +
						
					} */}
			{/* <input
				{...props}
				type={type}
				className={
					'bg-stone-200 border-stone-200 transition-all rounded-xl focus:border-stone-200 focus:outline-0 ' +
					className
				}
				ref={input}
			/> */}
		</>
	)
})
