import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import './globals.css'
import CustomCursor from './components/CustomCursor'

const syne = Syne({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'MADOX — Premier Luxury Real Estate',
  description:
    "Discover an unparalleled collection of exceptional properties in the world's most coveted addresses. MADOX connects discerning buyers with extraordinary homes.",
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
        {children}
      </body>
    </html>
  )
}
