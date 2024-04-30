import { useEffect } from 'react'
import { useStoreMain } from '@/store'

export const useColorMode = () => {
	const { colorMode, setColorMode } = useStoreMain()

	useEffect(() => {
		if (colorMode === 'dark') {
			document.querySelector('html')?.classList.add('dark')
		} else {
			document.querySelector('html')?.classList.remove('dark')
		}
	}, [colorMode])

	const changeColorMode = () => {
		if (setColorMode) {
			colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
		}
	}

	return { colorMode, changeColorMode }
}
