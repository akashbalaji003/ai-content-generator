import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm boder-b-2 bg-white flex justify-between items-center'>
      <div className='flex gap-2 items-center 
      p-2 border rounded-md max-w-lg bg-white'>
        <Search/>
        <input type="text" placeholder='Search...' 
        className='outline-none'
        />
      </div>
      <div className='flex gap-5 item-center'>
        <h2 className='bg-primary p-4 rounded-full text-xs text-white'>
          Join Membership just for 4.99$/month</h2>
          <UserButton/>
      </div>
    </div>
  )
}


export default Header
