import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FlowlyNova – AI Automation Platform',
  description: 'Build smart AI agents and automate your business workflows with FlowlyNova.',
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
