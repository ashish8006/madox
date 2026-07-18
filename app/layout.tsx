import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import './globals.css'
import CustomCursor from './components/CustomCursor'
import LeadModal from './components/LeadModal'

const syne = Syne({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'MADOX — Digital Brand & Technology Agency',
  description:
    'MADOX is a full-service IT and brand communications agency. We build brands, digital products, and performance systems that dominate their markets.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0908]" suppressHydrationWarning>
        <CustomCursor />
        <LeadModal />
        {children}
      </body>
    </html>
  )
}
