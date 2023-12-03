import { Img } from 'react-image'
import { Link } from '@inertiajs/react'
import { useLaravelReactI18n } from 'laravel-react-i18n'

const logo = {
	src: '/img/brand.svg',
	alt: import.meta.env.VITE_APP_NAME ?? '',
	className: `w-6`,
}

const NavItem = ({ children, href = '/', icon, active }) => {
	return (
		<>
			<Link
				href={href}
				className={`w-1/5 px-4 pb-2 pt-3 flex flex-col items-center justify-center gap-y-1 select-none ${
					active ? 'bg-yellow-500' : 'text-gray-700'
				}`}
			>
				{icon && <i className={`${icon} ri-lg`} />}
				<span className="text-xs leading-none">{children}</span>
			</Link>
		</>
	)
}

export const MobileNavBar = () => {
	const { t } = useLaravelReactI18n()

	return (
		<div className="bg-white bottom-0 inset-x-0 fixed shadow-black shadow-2xl z-30">
			<div className="flex justify-between items-center gap-x-1">
				<NavItem
					href={route('home')}
					icon="ri-home-5-line"
					active={route().current('home')}
				>
					{t('ui.home')}
				</NavItem>

				<NavItem href="/login" icon="ri-file-paper-line">
					Whitepaper
				</NavItem>

				<div className="bg-white w-12 h-12 -mt-8 grid place-content-center select-none rounded-full">
					{route().current('home') ? (
						<Img
							src={logo.src}
							alt={logo.alt}
							width="100px"
							height="100px"
							className={logo.className}
							title="logo"
							loading="eager"
						/>
					) : (
						<Link href="/">
							<Img
								src={logo.src}
								alt={logo.alt}
								width="100px"
								height="100px"
								className={logo.className}
								title="logo"
								loading="eager"
							/>
						</Link>
					)}
				</div>

				<NavItem
					href={route('login')}
					icon="ri-user-line"
					active={route().current('login')}
				>
					{t('auth.login')}
				</NavItem>

				<NavItem
					href={route('register')}
					icon="ri-lock-password-line"
					active={route().current('register')}
				>
					{t('auth.register')}
				</NavItem>
			</div>
		</div>
	)
}
