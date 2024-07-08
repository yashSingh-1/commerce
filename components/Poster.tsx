
import React from 'react'
import CarouselItems from './CarouselItems'
import { FetchingPoster } from './FetchingDate'
import { urlFor } from '@/constants/client';

const Poster = async () => {
  const poster = await FetchingPoster();
  const realPoster = poster[0];
  console.log("Poster in the poster", poster)
  return (
    <div className='w-full h-fit  ' key={"Cunt"}>
        <div className='pb-1 w-full min-h-[400px] relative '>
        
        <CarouselItems img={urlFor(realPoster.poster).url()} 
          className='w-fit h-fit rounded-2xl object-cover md:max-h-[350px]'/>
        
        </div>
    </div>
  )
}

export default Poster