import { NavLink } from '.'
import { Img } from 'react-image'
import { Link } from '@inertiajs/react'
import { useLaravelReactI18n } from 'laravel-react-i18n'

const logo = {
	src: '/img/brand.svg',
	alt: import.meta.env.VITE_APP_NAME ?? '',
	className: `w-10`,
}

export const GuestNavbar = () => {
	const { t } = useLaravelReactI18n()

	return (
		<div className="top-0 inset-x-0 fixed">
			<div className="px-6 py-2 flex">
				<div className="">
					{route().current('home') ? (
						<Img src={logo.src} alt={logo.alt} className={logo.className} />
					) : (
						<Link href="/">
							<Img src={logo.src} alt={logo.alt} className={logo.className} />
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
