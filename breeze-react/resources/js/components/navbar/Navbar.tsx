import { router, usePage } from '@inertiajs/react'
import { t } from '@/i18n'
import { Button, cn } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useWindowWidth } from '@/hooks'
import { useStoreMain } from '@/store'

export const Navbar = () => {
	const { windowWidth } = useWindowWidth()
	const { navbarOpen } = useStoreMain()
	const { url } = usePage()

	return (
		<motion.aside
			className={cn(
				'bg-white border-r border-zinc-100 w-72 min-h-screen left-0 top-0 fixed z-30',
				'md:w-60',
				'dark:bg-zinc-700 dark:border-zinc-800',
			)}
			animate={{ x: windowWidth >= 768 ? 0 : navbarOpen ? 0 : '-100%' }}
			transition={{ duration: 0.4, ease: 'linear' }}
		>
			<div className="pt-16 px-2 md:pt-20">
				<div className="">
					<div className="space-y-2">
						<Button
							fullWidth
							variant="light"
							onPress={() => router.visit(route('dashboard'))}
							isDisabled={'/dashboard' === url}
							className="px-3 justify-start"
						>
							{t('Dashboard')}
						</Button>

						<Button
							fullWidth
							variant="light"
							onPress={() => router.visit(route('profile.edit'))}
							isDisabled={'/profile' === url}
							className="px-3 justify-start"
						>
							{t('Mi account')}
						</Button>

						<Button
							fullWidth
							variant="light"
							isDisabled
							className="px-3 justify-start"
						>
							Item 2
						</Button>

						<Button
							fullWidth
							variant="light"
							isDisabled
							className="px-3 justify-start"
						>
							Item 3
						</Button>

						<Button
							fullWidth
							variant="light"
							isDisabled
							className="px-3 justify-start"
						>
							Item 4
						</Button>
					</div>
				</div>
			</div>
		</motion.aside>
	)
}
