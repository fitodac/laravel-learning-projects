import { ToastContainer } from 'react-toastify'
import { useStoreMain } from '@/store'
import { Store } from '@/types'

export const Toastify = (): JSX.Element => {
	const { colorMode } = useStoreMain() as Store

	return (
		<ToastContainer
			position="bottom-right"
			autoClose={4000}
			hideProgressBar={false}
			newestOnTop={true}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme={colorMode}
		/>
	)
}
