import { Inter } from 'next/font/google'

import { Suspense } from 'react'
import { MainProvider } from '@/context/MainProvider'
import { PageHeader } from '@/components/PageHeader'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AuthProfile',
  description: 'An authorization experiment with Laravel and Next.js by @fitodac',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
				<MainProvider>
					<PageHeader />

					<main className="min-h-screen flex">
						<Suspense>
							{children}
						</Suspense>
					</main>
				</MainProvider>
			</body>
    </html>
  )
}
