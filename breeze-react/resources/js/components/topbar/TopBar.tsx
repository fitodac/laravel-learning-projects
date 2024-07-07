import {
	Switch,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from '@nextui-org/react'
import { usePage, router } from '@inertiajs/react'
import { t } from '@/i18n'
import { useColorMode } from '@/hooks'
import { cn } from '@nextui-org/react'
import { useNavbarToggler } from '@/hooks'
import { PageProps } from '@/types'

import img_brand from '@/assets/img/brand.svg'
import { useEffect } from 'react'

export const TopBar = () => {
	const user = usePage<PageProps>().props.auth.user

	const { navbarOpen, toggleNavbar } = useNavbarToggler()
	const { colorMode, changeColorMode } = useColorMode()

	useEffect(() => {}, [])

	return (
		<div
			className={cn(
				'bg-white border-b border-zinc-100 w-full fixed z-40',
				'dark:bg-zinc-700 dark:border-zinc-800',
			)}
		>
			<div className="pl-5 pr-3 py-1 flex justify-between items-center md:py-2">
				<div>
					<img src={img_brand} alt="Logo" className="w-20 mt-1 md:w-24" />
				</div>

				<div className="flex gap-x-0 items-center">
					<Switch
						color="default"
						isSelected={colorMode === 'dark'}
						size="sm"
						thumbIcon={({ isSelected }) =>
							isSelected ? (
								<i className="ri-moon-fill text-zinc-800" />
							) : (
								<i className="ri-sun-fill text-yellow-500" />
							)
						}
						onChange={changeColorMode}
					/>

					<Dropdown>
						<DropdownTrigger>
							<Button
								variant="light"
								endContent={<i className="ri-arrow-down-s-line" />}
							>
								{user?.name}
							</Button>
						</DropdownTrigger>

						<DropdownMenu aria-label="Dropdown Variants" color="primary">
							<DropdownItem
								textValue={t('My account')}
								onClick={() => router.visit(route('profile.edit'))}
							>
								{t('My account')}
							</DropdownItem>

							<DropdownItem
								textValue={t('Log out')}
								onClick={() => router.post(route('logout'))}
							>
								{t('Log out')}
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>

					<Button
						isIconOnly
						variant="light"
						onPress={toggleNavbar}
						className="md:hidden"
					>
						<i
							className={cn(
								navbarOpen ? 'ri-close-large-line' : 'ri-menu-3-line',
								'ri-xl',
							)}
						/>
					</Button>
				</div>
			</div>
		</div>
	)
}
