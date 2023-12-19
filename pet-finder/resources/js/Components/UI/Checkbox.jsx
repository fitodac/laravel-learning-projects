import { RadixCheckbox, Text } from '@/components'

const inputClass = `border-stone-300 text-yellow-500 rounded-md 
focus:ring-0 focus:outline-0 focus:shadow-none focus:active:shadow-none`

export const Checkbox = ({ className = '', label = '', ...props }) => {
	return (
		<>
			<Text
				as="label"
				size="1"
				className="font-semibold inline-flex gap-x-2 items-center select-none cursor-pointer"
				{...props}
			>
				<RadixCheckbox />
				<span>{label}</span>
			</Text>

			{/* <label className="">
				<input {...props} type="checkbox" className={inputClass + className} />
				<span className="ms-2 text-sm leading-tight top-px relative">
					{label}
				</span>
			</label> */}
		</>
	)
}
