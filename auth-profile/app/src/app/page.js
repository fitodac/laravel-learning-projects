// import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
	return (
		<div className="py-40 space-y-4">
			<p>Greetings earthling, 
				<br/>You've come the AuthProfile app, an exercise of users authentication built 
				with Laravel and Next.js frameworks</p>
			
			<p>To continue, please
&nbsp;<Link href="/register" className="text-indigo-500 font-medium underline">create an account</Link>
&nbsp;or&nbsp;
<Link href="/login" className="text-indigo-500 font-medium underline">Log in</Link> 
&nbsp;if you're already registered.
			</p>
		</div>
	)
}
