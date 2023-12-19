import { Button } from '@/components'

const btnPrimaryClassName = `bg-gradient-to-b from-yellow-200 to-[200%] to-yellow-700 
font-medium tracking-wide px-6 py-2
inline-flex items-center justify-center border select-none transition-colors rounded-xl 
hover:from-yellow-300 hover:to-yellow-800 focus:from-yellow-500 focus:to-yellow-200`

export const ButtonPrimary = ({
	className = '',
	disabled,
	children,
	...props
}) => {
	return (
		<>
			<Button size="3" radius="large" variant="soft" asChild>
				<button
					{...props}
					className={`${btnPrimaryClassName} ${
						disabled && 'opacity-25'
					} ${className}`}
					disabled={disabled}
				>
					<span className="text-white text-sm">{children}</span>
				</button>
			</Button>
		</>
	)
}
