import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jasper',
<<<<<<< HEAD:src/app/layout.js
  description: 'jasper-website',
=======
  description: 'jasper website',
>>>>>>> 801b5d3be6a3f2f8079c710b7c2b9c8457ead9f0:src/app/layout.jsx
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD:src/app/layout.js
      <body className={"bg-black"}>
        <main>
          {children}
        </main>
      </body>
=======
      <body className={inter.className}>
        <p>HELLO</p>
        {children}
        </body>
>>>>>>> 801b5d3be6a3f2f8079c710b7c2b9c8457ead9f0:src/app/layout.jsx
    </html>
  )
}
