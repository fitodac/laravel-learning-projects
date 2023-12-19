export default function InputLabel({
	value,
	className = '',
	children,
	...props
}) {
	return (
		<label
			{...props}
			className={
				`block font-medium text-sm text-stone-700 dark:text-stone-300 ` +
				className
			}
		>
			{value ? value : children}
		</label>
	)
}
