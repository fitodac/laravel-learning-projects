import { PropsWithChildren } from 'react'
import { Head } from '@inertiajs/react'
import { Navbar, TopBar, Toastify } from '@/components'
import { useWindowWidth } from '@/hooks'
import { cn } from '@nextui-org/react'

type PropsLayout = {
	pageTitle: string
} & PropsWithChildren

export const AuthenticatedLayout = ({ children, pageTitle }: PropsLayout) => {
	const { windowWidth } = useWindowWidth()

	return (
		<>
			<Head title={pageTitle} />

			<main className="w-full min-h-screen">
				<TopBar />

				<div
					className={cn(
						'bg-zinc-50 w-full min-h-screen',
						'md:pl-60',
						'dark:bg-zinc-900',
					)}
				>
					<Navbar />

					<div className="px-10">{children}</div>
				</div>
			</main>

			<Toastify />
		</>
	)
}
