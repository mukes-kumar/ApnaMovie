import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import user from '../assets/user.png'
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from '../constants/navigation';



function Header() {

  const navigate = useNavigate();
  const location =useLocation()
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
  const [searchInput , setSearchInput] = useState(removeSpace);

  console.log('Locations:- ',removeSpace);
  useEffect(() =>{
    if(searchInput){
      navigate(`/search?q=${searchInput}`)
    }
  }, [searchInput])

  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>
      <div className='container mx-auto px-2 flex items-center h-full'>
        <div>
          <Link href="/">
            <img
              src={logo}
              alt='logo'
              width={120}
            />
          </Link>
        </div>
        <nav className='hidden  lg:flex items-center gap-1 ml-5'>
          {
            navigation.map((nav, index) => {
              return (
                <div key={nav.label}>
                  <NavLink key={nav.label} to={nav.href} className={({ isActive }) => `px-3 hover:text-indigo-200 ${isActive && "text-slate-400 "}`}>
                    {nav.label}
                  </NavLink>
                </div>
              )
            })
          }
        </nav>
        <div className='ml-auto flex items-center gap-5'>
          <form className='flex items-center gap-2' onSubmit={handleSubmit}>
            <input type='text'
              placeholder='Search here...'
              className='bg-transparent px-4 py-1 outline-none hidden lg:block' 
              onChange={(e)=> setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button className='text-2xl text-white'>
              <IoSearchOutline />
            </button>
          </form>

          <div className='w-9 h-9 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
            <img
              src={user}
              className='w-full h-full'
              alt='userlogo'
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header