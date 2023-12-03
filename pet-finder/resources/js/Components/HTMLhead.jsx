import { Head } from '@inertiajs/react'
export const HTMLhead = ({ title, description }) => {
	return (
		<>
			<Head title={title}>
				<link rel="canonical" href={location.href} />
				<meta name="description" content={description} />
			</Head>
		</>
	)
}
