import type { User } from '@/types.d'

export interface MainStoreProps {
	colorMode: string
	setColorMode: (value: string) => void
	auth: { user: User | null }
	setAuth: (value: any) => void
	profileTab: string
	setProfileTab?: (value: string) => void
	navbarOpen: boolean
	setNavbarOpen: (value: boolean) => void
}
