import Link from 'next/link'


export const PageHeader = () =>
{
	return (
		<div className="bg-white border-b-border-slate-100 px-6 py-1 inset-x-0 fixed z-10">
			<div className="flex justify-between items-center">

				<Link href="/" className="text-indigo-600 select-none">
					<span className="font-semibold">AuthProfile</span>
					<span className="text-sm pl-1">app</span>
				</Link>

				<nav className="main-navbar">
					<div className="bg-indigo-600 w-8 h-8 rounded-full overflow-hidden">
						<div className="text-white text-xs font-light w-full h-full grid place-content-center">JD</div>
					</div>

					<Link href="/login" className="main-navbar--item">Log in</Link>
					<Link href="/register" className="main-navbar--item">Create Account</Link>
					<Link href="/my-account" className="main-navbar--item">Profile</Link>
				</nav>

			</div>
		</div>
	)
}