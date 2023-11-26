import { useContext } from 'react'
import QRCode from 'react-qr-code'
import { myPetContext } from '../context'
import { Link } from '@inertiajs/react'

export const QR = () => {
	const {
		data: { url },
	} = useContext(myPetContext)
	return (
		<>
			<a href={url} target="_blank">
				<QRCode value={url} size={210} style={{ maxWidth: '100%' }} />
			</a>
		</>
	)
}
