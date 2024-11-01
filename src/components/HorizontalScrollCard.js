import React, { useRef } from 'react'
import Card from './Card'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";


function HorizontalScrollCard({ data = [], heading, trending , media_type}) {
  const containeRef = useRef()

  const handleNext = ()=>{
    containeRef.current.scrollLeft +=300
  }
  const handlePrevious = ()=>{
    containeRef.current.scrollLeft -=300
  }
  return (
    <div className='container mx-auto px-3 my-10'>
      <h2 className='text-xl lg:text-2xl font-bold mb-2 text-white'>{heading}</h2>

      <div className='relative'>
        <div ref={containeRef} className='grid  grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-x-scroll overflow-hidden relative z-10 scroll-smooth transition-all scrollbar-none'>
          {
            data.map((data, index) => {
              return (
                <>
                  <Card key={data.id + "bannerData" + index + "m"} data={data} index={index + 1} trending={trending} media_type={media_type}/>
                </>
              )
            })}
        </div>

        {/* Button next and previous image */}
        <div className='absolute top-0 hidden lg:flex justify-between w-full items-center h-full'>
          <button onClick={handlePrevious} className='bg-white p-2 text-black rounded-full -ml-2 z-10'>
            <FaAngleLeft />
          </button>
          <button onClick={handleNext} className='bg-white p-2 text-black rounded-full -mr-2 z-10' >
            <FaAngleRight />
          </button>
        </div>
      </div>

    </div>
  )
}

export default HorizontalScrollCard