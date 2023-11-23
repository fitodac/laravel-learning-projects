import { NavLink } from '.'

export const Menu = () => {
	return (
		<div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
			<NavLink href={route('dashboard')} active={route().current('dashboard')}>
				Dashboard
			</NavLink>
			<NavLink href={route('pets.list')} active={route().current('pets.list')}>
				Mascotas
			</NavLink>
		</div>
	)
}
