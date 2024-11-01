// import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
// import Card from '../components/Card'
import { useSelector } from 'react-redux'
import HorizontalScrollCard from '../components/HorizontalScrollCard'
// import axios from 'axios'
import useFetch from '../hooks/useFetch'

function Home() {
  const trendingData = useSelector(state => state.movioData.bannerData)

  const {data: nowPlayingData} = useFetch("/movie/now_playing")
  const {data: popularData} = useFetch("/movie/top_rated")
  const {data: popularTvShow} = useFetch("/tv/popular")

  const {data: onTheAirShowData} = useFetch("/tv/airing_today")



  // useEffect(()=>{
  //     fetchNowPlayingData()
  // }, [])

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true} />

      <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} trending={false} media_type={"movie"}/>

      <HorizontalScrollCard data={popularData} heading={"Top Rated Movies"} trending={false} media_type={"movie"}/>

      <HorizontalScrollCard data={popularTvShow} heading={"Popular TV Show"} trending={false} media_type={"tv"}/>

      <HorizontalScrollCard data={onTheAirShowData} heading={"On The Air Show"} trending={false} media_type={"tv"}/>
      
    </div>
  )
}

export default Home