import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom';
function Card({ data, trending, index, media_type }) {

  const imageURL = useSelector(state => state.movioData.imageURL)
  console.log('imageURL:-', imageURL);

  const mediaType = data.media_type ?? media_type
  return (
    <Link to={"/" + mediaType + "/" + data.id} className='w-full min-w-[230px] max-w-[260px] rounded block h-80 overflow-hidden relative hover:scale-105 transition-all'>
      {
        data?.poster_path ? (
          <img
            src={imageURL + data?.poster_path}
            alt='img'
          />
        ) : (
          <div className='bg-neutral-800 h-full w-full flex justify-center items-center'>
            No image found
          </div>
        )
      }


      <div className='absolute top-4'>
        {
          trending && (
            <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden  hover:scale-105 transition-all'>
              #{index} Trending
            </div>
          )
        }
      </div>

      <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 p-2 '>
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">{data?.title || data?.name}</h2>
        <div className='text-sm text-neutral-400 flex justify-between items-center'>
          <p>{moment(data.release_date || data.first_air_date).format("MMM Do YYYY")}</p>
          <p className='rounded-full bg-black px-1 text-xs text-white bg-opacity-40'>Rating :{Number(data.vote_average).toFixed(1)}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card