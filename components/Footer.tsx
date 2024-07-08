import { policies } from '@/constants'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col bg-stone-900 text-white p-4'>
        <div className='p-4 text-red-700 text-2xl font-semibold mb-2'>
            Extrovert
        </div>
        <div className='grid grid-cols-2'>
        <div className='mb-2'>
          <p className='font-semibold text-blue-1 ml-4 mb-2 text-xl'>Policies</p>
          {
            policies.map((policy) => (
              <a href={policy.route} key={policy.label}>
                <div key={policy.label} className='p-2 ml-2'>
                {policy.label}
              </div>
              </a>
            ))
          }
        </div>
        <div>
        <p className='font-semibold text-blue-1 ml-4 mb-2 text-xl'>Contact Us</p>
            < a href="mailto:dobbyneedsclothes@gmail.com">
            <p className='p-2 ml-2'>Email Us here!</p>
            </a>
            <a href="https://www.instagram.com/extrovertforyou/" target='_blank'>
            <p className='p-2 ml-2'>Instagram</p>
            </a>
        </div>
        </div>
    </div>
  )
}

export default Footer