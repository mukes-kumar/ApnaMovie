import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";


function BannerHome() {

  const bannerData = useSelector(state => state.movioData.bannerData)
  const imageURL = useSelector(state => state.movioData.imageURL)

  const [currentImage , setCurrentImage] = useState(0);
  //   next banner button
  const handleNext = () =>{
    if(currentImage < bannerData.length -1){
      setCurrentImage(preve => preve +1);
    }
  }
  const handlePrevious = () =>{
    if(currentImage > 0){
      setCurrentImage(preve => preve - 1);
    }
  }

  useEffect(() =>{
      const interval = setInterval(() =>{
        if(currentImage < bannerData.length -1){
          handleNext()
        }
        
        else{
           setCurrentImage(0)
        }
      }, 5000)

      return () =>clearInterval(interval)
  }, [bannerData,imageURL , currentImage])

  return (
    <section className='w-full h-full'>
      <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
        {
          bannerData.map((data, index) => {
            // console.log(data)
            return (
              <div className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all duration-500' style={{transform: `translateX(-${currentImage * 100}%)`}} key={data.title+""+index}>
                <div className='w-full h-full'>
                  <img
                    src={imageURL + data.backdrop_path}
                    alt='img' className='h-full w-full object-cover'
                  />
                </div>
  
                {/* Button next and previous image */}
                <div className='absolute top-0 w-full h-full  items-center justify-between px-10 hidden group-hover:lg:flex'>
                  <button onClick={handlePrevious} className="bg-white p-1 rounded-full text-2xl z-10 text-black hover:text-white hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105 ">
                    <FaAngleLeft />
                  </button>
                  <button onClick={handleNext} className='bg-white hover:text-white p-1 rounded-full text-2xl z-10 text-black hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105 '>
                    <FaAngleRight />
                  </button>
                </div>

                <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>

                </div>
                <div className='container mx-auto'>
                  <div className=' w-full absolute bottom-0 max-w-md px-3'>
                    <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl'>{data.title || data.name}</h2>
                    <p className='text-ellipsis line-clamp-3 my-2'>{data.overview}</p>
                    <div className='flex items-center gap-4'>
                      <p>Rating : {Number(data.vote_average).toFixed(1)}+</p>
                      <span>|</span>

                      <p>View : {Number(data.popularity).toFixed(0)}</p>
                    </div>
                    <button className='bg-white hover:text-white px-4 py-2 text-black font-bold rounded-lg mt-4 text-md hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105 '>Play Now</button>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default BannerHome