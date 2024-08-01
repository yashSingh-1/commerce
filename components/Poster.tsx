
import React from 'react'
import CarouselItems from './CarouselItems'
import { FetchingPoster } from './FetchingDate'
import { urlFor } from '@/constants/client';

const Poster = async () => {
  const poster = await FetchingPoster();
  const realPoster = poster[0];

  console.log("Poster in the poster", poster)
  console.log("Poster in the real poster", realPoster)

  return (
    <div className='w-full h-fit' key={"Cunt"}>
        <div className='pb-1 w-full min-h-[400px] relative '>
        
        <CarouselItems img={urlFor(realPoster.poster3).url()} 
          img1={urlFor(realPoster.poster1).url()} 
          img2={urlFor(realPoster.poster2).url()} 
          img3={urlFor(realPoster.poster4).url()} 
          className='w-fit h-fit rounded-2xl object-cover md:max-h-[350px]'/>
        
        </div>
    </div>
  )
}

export default Poster