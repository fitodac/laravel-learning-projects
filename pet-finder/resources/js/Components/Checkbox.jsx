export default function Checkbox({ className = '', ...props }) {
	return (
		<input
			{...props}
			type="checkbox"
			className={
				'rounded dark:bg-stone-900 border-stone-300 dark:border-stone-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-stone-800 ' +
				className
			}
		/>
	)
}
