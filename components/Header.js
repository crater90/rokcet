import React from 'react'

function Header() {
  return (
    <div className='fixed z-[9999] flex w-full items-center justify-center'>
      <div className='mt-4 flex w-11/12 gap-6 rounded-2xl border border-gray-700 bg-zinc-800 p-1 shadow-xl md:w-fit'>
        <div className='flex h-9 w-full items-center justify-between gap-x-2 md:justify-start text-white'>
          <a>Product</a>
          <a>Pricing</a>
          <a>Blog</a>
          <a>Resources</a>
          <a>Download</a>
        </div>
      </div>
    </div>
  )
}

export default Header