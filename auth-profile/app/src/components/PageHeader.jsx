import Link from 'next/link'


export const PageHeader = () =>
{
	return (
		<div className="bg-white border-b-border-slate-100 px-6 py-3">
			<div className="flex justify-between items-center">

				<Link href="/" className="text-indigo-600 select-none">
					<span className="font-semibold">AuthProfile</span>
					<span className="text-sm pl-1">app</span>
				</Link>

				<nav className="main-navbar">
					<Link href="/login" className="main-navbar--item">Log in</Link>
					<Link href="/register" className="main-navbar--item">Create Account</Link>
				</nav>

			</div>
		</div>
	)
}