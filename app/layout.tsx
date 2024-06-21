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
  title: 'Portfolio | SUBHAM BANERJEE',
  description: "This is Subham Banerjee's portfolio website. Here you can find all the projects he has worked on and his past experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={oxygen.className} suppressHydrationWarning>
      <body className={oxygen.className}>
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
