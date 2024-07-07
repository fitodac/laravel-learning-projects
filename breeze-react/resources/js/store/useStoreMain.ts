import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { MainStoreProps } from './types'

export const useStoreMain = create<MainStoreProps>()(
	persist(
		(set, get) => ({
			colorMode: localStorage.getItem('colorMode') || 'light',
			setColorMode: (colorMode: string) => {
				set({ colorMode })
			},
			auth: { user: null },
			setAuth: (auth: any) => set({ auth }),
			profileTab: 'profile',
			setProfileTab: (profileTab: string) => set({ profileTab }),
			navbarOpen: false,
			setNavbarOpen: (navbarOpen: boolean) => set({ navbarOpen }),
		}),
		{
			name: 'store',
			storage: createJSONStorage(() => sessionStorage),
		},
	),
)
