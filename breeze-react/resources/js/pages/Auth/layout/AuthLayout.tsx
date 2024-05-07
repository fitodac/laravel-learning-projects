import { PropsWithChildren } from 'react'
import { Head } from '@inertiajs/react'
import { Button, cn } from '@nextui-org/react'
import { useColorMode } from '@/hooks'
import { Toastify } from '@/components'

interface PropsLayout extends PropsWithChildren {
	pageTitle: string
}

import img_brand from '@/assets/img/brand.svg'

export const AuthLayout = ({ children, pageTitle }: PropsLayout) => {
	const { colorMode, changeColorMode } = useColorMode()

	return (
		<>
			<Head title={pageTitle} />

			<div className="flex justify-end p-3 inset-x-0 absolute z-30">
				<Button isIconOnly size="sm" onPress={changeColorMode}>
					<i
						className={cn(
							colorMode === 'light' ? 'ri-moon-fill' : 'ri-sun-fill',
							'ri-xl',
						)}
					/>
				</Button>
			</div>

			<main className="w-full min-h-screen flex justify-center items-center">
				<section className="max-w-lg">
					<img src={img_brand} alt="Logo" className="w-32 mx-auto" />

					<div className="space-y-2 mt-10">
						<h2 className="font-bold">{pageTitle}</h2>
						{children}
					</div>
				</section>
			</main>

			<Toastify />
		</>
	)
}
