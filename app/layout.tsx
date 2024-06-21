import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Oxygen } from 'next/font/google'
import { ThemeProviders } from './ThemeProviders'

const inter = Inter({ subsets: ['latin'] })
const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['300','400'],
  style: ['normal'],
})

export const metadata: Metadata = {
  title: 'Subham Video Streaming App',
  description: 'This app will help you to have a peer to peer video call with your friends and family.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviders>
      <Navbar/>
      <main className='max-w-10xl mx-auto'>
      {children}
        </main>
        </ThemeProviders>
      </body>
    </html>
  )
}
