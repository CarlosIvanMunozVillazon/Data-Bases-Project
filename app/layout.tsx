//import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bienestar Universitario',
  description: 'Grupo 2 Bases de datos 2023-1',
}

export default function RootLayout({ children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
