import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Banner from './banner'
import {UserProvider} from "@auth0/nextjs-auth0/client"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PomStudy',
  description: 'Achieve what you dream',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <html lang="en">
      <UserProvider>
        <Banner/>
        <body>{children}</body>
      </UserProvider>
      </html>
    </div>
  )
}
