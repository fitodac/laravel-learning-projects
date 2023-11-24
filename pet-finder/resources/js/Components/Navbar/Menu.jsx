import { useContext } from 'react'
import { NavLink } from '.'
import { Context } from '@/context'
import { useLaravelReactI18n } from 'laravel-react-i18n'

export const Menu = () => {
	const { user } = useContext(Context)
	const { t } = useLaravelReactI18n()

	return (
		<div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
			<NavLink href={route('dashboard')} active={route().current('dashboard')}>
				Dashboard
			</NavLink>

			{/* <NavLink href={route('pets.list')} active={route().current('pets.list')}>
				Mascotas
			</NavLink> */}

			{user && (
				<>
					<NavLink
						href={route('user.pets', { username: user.username })}
						active={route().current('user.pets')}
					>
						{t('navbar.menu.my_pets')}
					</NavLink>
				</>
			)}
		</div>
	)
}
