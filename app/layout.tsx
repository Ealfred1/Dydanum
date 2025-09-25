import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dyadnum',
  description: 'Dyadnum - Your Next Generation Platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sf-pro">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
