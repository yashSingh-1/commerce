import Card from '@/components/Card'
import FetchingDate from '@/components/FetchingDate'
import Footer from '@/components/Footer'
import JoinInvitation from '@/components/JoinInvitation'
import NavBar from '@/components/NavBar'
import { urlFor } from '@/constants/client'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const data  = await FetchingDate();
  const totalProducts = data.length
  console.log("Date at all Procusts", data)
  return (
    <section className=''>
        <NavBar/>
        <div className='flex flex-col bg-slate-700 text-white'>
        <div className='flex p-4 justify-between '>
          <div className=' flex text-xl font-mono my-auto'>
          Curated Products for you! 
          </div>
          <div className='flex text-sm font-extralight my-auto '>
          {totalProducts} products
          </div>
        </div>
        
        </div>
        <div className='flex flex-col m-2'>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-2'>
          {
            
              data.map((item) => (
                <Link href={`/Product/${item.slug.current}`} key={item.slug.current}>
                  <Card img={urlFor(item.productImage.asset).url()}
                 title={item.productName}
                  discountedPrice={item.discountedPrice} key={item.slug.current}/>
                </Link>
              ))
            
          }
            
        </div>
    </div>
    <JoinInvitation />
    <Footer/>
    </section>
  )
}

export default page