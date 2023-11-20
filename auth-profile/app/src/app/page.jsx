'use client'
import Link from 'next/link'


export default function Home() {

	return (
		<div className="max-w-2xl py-40 space-y-4 mx-auto">
			<p>
				<span className="text-indigo-500">Saludos terricola</span>, 
				<br/>Has llegado a AuthProfile app, un ejercicio de autenticación de usuarios creado 
				con Laravel 10 y Next.js 14.</p>
			
			<p>Para continuar 
				deberás <Link 
					href="/register" 
					className="text-indigo-500 font-medium underline">registrarte</Link> o si 
					ya tienes una cuenta, <Link 
					href="/login" 
					className="text-indigo-500 font-medium underline">accede</Link>.
			</p>
		</div>
	)
}
