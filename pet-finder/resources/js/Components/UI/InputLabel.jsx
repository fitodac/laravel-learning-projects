import { Text } from '@/components'

export const InputLabel = ({ value, className = '', children, ...props }) => {
	return (
		<Text
			as="label"
			size="1"
			{...props}
			className={
				`block font-semibold text-stone-700 dark:text-stone-300 ` + className
			}
		>
			{value ? value : children}
		</Text>
	)
}
