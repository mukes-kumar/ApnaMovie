import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetails from '../hooks/useFetchDetails'
import { useSelector } from 'react-redux'
import Footer from "../components/Footer";
import moment from 'moment';
import Divider from '../components/Divider';
import useFetch from '../hooks/useFetch'
import HorizontalScrollCard from '../components/HorizontalScrollCard';


function DetailsPage() {

  const params = useParams()
  const imageURL = useSelector(state => state.movioData.imageURL)
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`)
  const { data: castData } = useFetchDetails(`/${params?.explore}/${params?.id}/credits`)

  const { data: similarData } = useFetch(`/${params?.explore}/${params?.id}/similar`)
  // console.log("Params:-", data);
  const { data: recommendationData } = useFetch(`/${params?.explore}/${params?.id}/recommendations`)

  console.log("CastData:-", castData);

  const duration = (Number(data?.runtime) / 60).toFixed(1).split(".")

  const writer = castData?.crew?.filter(el => el?.job === "Writer")?.map(el => el?.name)?.join(", ")

  console.log("Writer:", writer)
  return (
    <div>
      <div className='w-full h-[350px] relative hidden lg:block'>
        <div className='w-full h-full'>
          <img
            src={imageURL + data?.backdrop_path} alt='img...'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='top-0 absolute w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>
        </div>
      </div>

      <div className='container mx-auto lg:px-8 px-3 py-16 lg:py-0 flex flex-col lg:flex-row lg:gap-10 gap-5'>
        <div className='relative lg:-mt-28 lg:mx-0 mx-auto lg:ml-0 w-fit min-w-60'>
          <img
            src={imageURL + data?.poster_path} alt='img...'
            className='h-80 lg:w-72 w-80 object-cover rounded-lg '
          />
        </div>

        <div>
          <h2 className='text-2xl lg:text-4xl font-bold  text-white'>{data?.title || data?.name}</h2>
          <p className='text-neutral-400 '>{data?.tagline}</p>

          <Divider />
          <div className='flex items-center my-3 gap-3 text-neutral-300'>
            <p>
              Rating : {Number(data?.vote_average).toFixed(1)}+
            </p>
            <span>|</span>
            <p>
              View : {Number(data?.vote_count)}
            </p>
            <span>|</span>
            <p>Duration : {duration[0]}h {duration[1]}m</p>
          </div>
          <Divider />

          <div>
            <h3 className='text-xl font-bold text-white mb-1'>Overview</h3>
            <p>{data?.overview}</p>
            <Divider />

            <div className='flex items-center my-3 gap-3 text-center'>
              <p>
                Status : {data?.status}
              </p>
              <span>|</span>
              <p>
                Release Date : {moment(data?.release_date).format('MMM Do YYYY')}
              </p>
              <span>|</span>
              <p>
                Revenue : {Number(data?.revenue)}
              </p>
            </div>

            <Divider />

          </div>

          <div>
            <p><span className='text-yellow-600 font-semibold'>Director</span> : {castData?.crew[0]?.name}</p>
            <Divider />
            <p>
              <span className='text-yellow-600 font-semibold'>Writer : </span>{writer}
            </p>
          </div>

          <Divider />
          <h2 className='text-lg font-bold'>Cast : </h2>
          <div className='grid  grid-cols-[repeat(auto-fit,92px)] gap-3 lg:gap-6'>
            {
              castData?.cast?.filter(el => el?.profile_path).map((starCast, index) => {
                return (
                  <div key={index}>
                    <div>
                      <img
                        src={imageURL + starCast?.profile_path}
                        alt='ImagesCast'
                        className='w-24 h-24 rounded-full object-cover'
                      />
                    </div>
                    <p className='font-bold text-center text-sm text-neutral-300'>
                      {starCast?.name}
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div>
        <HorizontalScrollCard data={similarData} heading={"Similar " + params?.explore} media_type={params?.explore} />
      </div>

      <div>
        <HorizontalScrollCard data={recommendationData} heading={"Recommended " + params?.explore} media_type={params?.explore} />
      </div>
    </div>
  )
}

export default DetailsPage