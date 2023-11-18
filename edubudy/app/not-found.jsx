import React from 'react'
import Link from 'next/link'

function notfound() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <div className='p-5'>
        <div>
          <meta name="description" content="404 - Page Not Found" />
          <h1 className='text-3xl'>404 - That page does not seem to exist...</h1>
          <Link href={"/"}> Home Page </Link>
        </div>
      </div>
    </main>
  )
}

export default notfound;
