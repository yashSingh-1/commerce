import { urlFor } from '@/constants/client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import React from 'react'

const Card = ({img, title, discountedPrice} : {
    img: SanityImageSource,
    title: string,
    discountedPrice: string
}) => {
  return (
    <div className='flex flex-col rounded-xl items-center border-2  border-black-1 shadow-2xl' key={title}>
        <div className='py-2 px-1 w-full h-auto justify-center'>
            <img 
                src={urlFor(img).url()}
                alt='image'
                className='m-auto rounded-lg'
            />
        </div>
        <div className='flex justify-between mt-2 mb-2'>
            <div className='px-2 font-semibold'>
                {title}
            </div>
            <div className=' px-2 font-bold'>
                {discountedPrice}
            </div>
        </div>
    </div>
  )
}

export default Card