import { ReactNode } from 'react'

export const PageHeader = ({
	title,
	children,
}: {
	title: string
	children?: ReactNode
}): JSX.Element => {
	return (
		<div className="pt-5 pb-8 flex justify-between">
			<h2 className="text-lg font-semibold select-none">{title}</h2>

			<div>{children}</div>
		</div>
	)
}
