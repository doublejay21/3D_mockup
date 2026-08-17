import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Interior Studio',
  description: 'Powered by PromptXAI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
