import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Diego Vargas',
  description: 'Welcome to my amazing portfolio!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html >
  )
}
