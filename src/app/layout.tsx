import './reset.css'
import './globals.css'

export const metadata = {
  title: 'Next bbs',
  description: 'Bbs created by next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
