import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='text-center bg-neutral-600 bg-opacity-35 mb-20 text-neutral-400 py-2'>
      <div className='flex items-center justify-center gap-4'>
        <Link>About</Link>
        <Link to={'/'}>Contact</Link>
      </div>
      <p className='text-xs'>Created By Mukesh</p>
    </footer>
  )
}

export default Footer