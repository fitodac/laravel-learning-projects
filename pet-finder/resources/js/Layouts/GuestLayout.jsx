import { MobileNavBar } from '@/components'

export default function GuestLayout({ children }) {
	return (
		<>
			{children}
			<MobileNavBar />
		</>
	)
}
