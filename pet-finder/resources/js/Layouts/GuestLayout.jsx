import { useEffect, useState } from 'react'
import { GuestNavbar, MobileNavBar } from '@/components'

const getWindowSize = () => {
	const { innerWidth, innerHeight } = window
	return { width: innerWidth, height: innerHeight }
}

export default function GuestLayout({ children }) {
	const [windowSize, setWindowSize] = useState(getWindowSize())

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize())
		}

		window.addEventListener('resize', handleWindowResize)

		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	}, [])

	return (
		<>
			{children}

			{windowSize.width < 641 ? <MobileNavBar /> : <GuestNavbar />}
		</>
	)
}
