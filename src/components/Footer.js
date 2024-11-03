import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center bg-gradient-to-l from-red-800 to-slate-800 bg-opacity-35 text-slate-50 py-2'>
        <div className='flex items-center justify-center gap-4 '>
          <Link to="/" >About</Link>
          <Link to="/">Contact</Link>
        </div>
        <a className='text-sm text-blue-200' href='https://www.linkedin.com/in/mukesh-prajapati-751340260'>Created by Mukesh Prajapati</a>
    </footer>
  )
}

export default Footer
