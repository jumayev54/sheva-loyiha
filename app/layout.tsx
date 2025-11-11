import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import type React from 'react'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Dialect - Uzbek Dictionary & Translation',
	description: 'Modern Uzbek language translation and dictionary platform',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='uz'>
			<body className={`${_geist.className} font-sans antialiased`}>
				{children}
			</body>
		</html>
	)
}
