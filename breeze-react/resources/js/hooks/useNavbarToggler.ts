import { useStoreMain } from '@/store'
import { useWindowWidth } from '.'
import { useEffect } from 'react'

export const useNavbarToggler = () => {
	const { navbarOpen, setNavbarOpen } = useStoreMain()
	const { windowWidth } = useWindowWidth()

	useEffect(() => {
		if (windowWidth >= 768) setNavbarOpen(false)
	}, [windowWidth])

	const toggleNavbar = () => setNavbarOpen(!navbarOpen)

	return { navbarOpen, setNavbarOpen, toggleNavbar }
}
