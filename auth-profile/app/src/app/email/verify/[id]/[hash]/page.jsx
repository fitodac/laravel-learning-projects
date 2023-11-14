'use client'
import { useEffect } from 'react'
import { 
	useRouter,
	useSearchParams 
} from 'next/navigation'
import { validateEmail } from './helpers'
import { Loading } from '@/components'
import { useEmailVerifyToken } from '@/hooks'



export default function emailVerify({params})
{

	const router = useRouter()
	const { id, hash } = params
	const searchParams = useSearchParams()
	const expires = searchParams.get('expires')
	const signature = searchParams.get('signature')


	useEffect(() => {

		const verifyAccount = async () => {
			const validate = await validateEmail({ id, hash, expires, signature })
			
			if( validate.success ){
				useEmailVerifyToken().remove()
				router.push('/login')
			}else{
				router.push('/register')
			}
		}

		verifyAccount()
	}, [])



	return (
		<>
			<div className="max-w-2xl py-20 space-y-4 mx-auto">
				<div className="relative">
					<Loading status={true} />
				</div>

				<div className="text-center pt-20 space-y-2">
					<p className="notification-title">Please, be patient.</p>
					<p className="text-sm">We're validating your email</p>
				</div>
			</div>
		</>
	)
}