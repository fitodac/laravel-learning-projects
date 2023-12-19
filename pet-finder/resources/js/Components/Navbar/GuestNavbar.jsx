import { NavLink } from '.'
import { Img } from 'react-image'
import { Link } from '@inertiajs/react'
import { useLaravelReactI18n } from 'laravel-react-i18n'
import { Brand } from '@/components'

const NavItem = ({ children, href = '/', active }) => {
	return (
		<>
			<Link
				href={href}
				className="font-medium px-3 py-2 transition-all select-none hover:text-yellow-500"
			>
				{children}
			</Link>
		</>
	)
}

export const GuestNavbar = () => {
	const { t } = useLaravelReactI18n()
	return (
		<div className="bg-amber9 text-amber11 top-0 inset-x-0 fixed">
			<div className="px-6 py-2 flex justify-between items-center">
				<div className="">
					{route().current('home') ? (
						<Brand className="fill-white w-12 h-auto" />
					) : (
						<Link href="/">
							<Brand className="fill-white w-12 h-auto" />
						</Link>
					)}
				</div>

				<nav className="">
					<NavItem href={route('home')}>{t('ui.home')}</NavItem>
					<NavItem href={route('login')}>{t('ui.login')}</NavItem>
					<NavItem href={route('register')}>{t('ui.register')}</NavItem>
				</nav>
			</div>
		</div>
	)
}
