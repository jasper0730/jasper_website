import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jasper',
  description: 'jasper-website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-black"}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
