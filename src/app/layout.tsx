import '@/styles/global.css'
import Link from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='h-full bg-zinc-900 text-white flex flex-col px-4'>
        <nav className='container max-w-sm sm:max-w-3xl mx-auto'>
          <div className="flex justify-between py-6">
            <div>
              <Link href='/'>Home</Link>
            </div>
            <div>
              <a href="https://www.typeform.com/careers" target="_blank" rel="noopener noreferrer">
                Work with me
                <HiOutlineExternalLink className='ml-2 h-4 w-4 inline align-text-bottom' />
              </a>
            </div>
          </div>
          <br />
        </nav>
        <main className='grow container max-w-sm sm:max-w-3xl mx-auto'>
          {children}
        </main>
        <footer className='container max-w-sm sm:max-w-3xl mx-auto'>
          <p className='pb-6 pt-20 text-center text-gray-400 text-sm'>
            © {new Date().getFullYear()} Max Prilutskiy
          </p>
        </footer>
      </body>
    </html>
  )
}
