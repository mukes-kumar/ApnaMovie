import React from 'react'
import { mobileNavigation } from '../constants/navigation'
import { NavLink } from 'react-router-dom'
function MobileNavigation() {
  return (
      <section className='lg:hidden h-14 bg-black bg-opacity-75 fixed bottom-0 w-full z-40'>
          <div className='flex items-center justify-between h-full text-neutral-400'>
            {
                mobileNavigation.map((nav, index)=>{
                  return(
                    <NavLink key={nav.label+"mobilenavigation"} to={nav.href} 
                    className={({isActive})=>`px-3 flex items-center h-full flex-col justify-center ${isActive && "text-white"}`}>
                         <div className='text-2xl'>
                           {nav.icon}
                         </div>
                         <p className='text-sm'>{nav.label}</p>
                    </NavLink>
                  )
                })
            }
          </div>
      </section>
  )
}

export default MobileNavigation