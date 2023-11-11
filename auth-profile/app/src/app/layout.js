import { Inter } from 'next/font/google'

import { PageHeader } from '@/components/PageHeader'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

				<PageHeader />

				<main className="text-slate-600 font-light max-w-5xl mx-auto mt-6 mb-20">
					{children}
				</main>
			</body>
    </html>
  )
}