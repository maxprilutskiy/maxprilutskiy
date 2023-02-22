import '@/styles/global.css'

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
      <body className='h-full bg-zinc-900 text-white flex flex-col'>
        <nav />
        <main className='grow'>
          {children}
        </main>
        <footer>
          <div className="container mx-auto py-4">
            <p className='text-center text-gray-400 text-sm'>
              © {new Date().getFullYear()} Max Prilutskiy
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
