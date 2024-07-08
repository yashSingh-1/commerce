import React from 'react'

const JoinInvitation = () => {
  return (
    <div className='flex flex-col bg-pink-500 p-6 text-center'>
        <p className='text-white font-bold text-2xl'>
            Join us on Socials!
        </p>
        <p className='text-white mt-5 font-semibold'>
            Comical Satire that drips of a offensive state. 
        </p>
        <a href="https://www.instagram.com/extrovertforyou/" target='_blank'>
        <p className='border-2 border-white text-white mt-5
         rounded-xl p-2 bg-black-1 w-[300px] flex mx-auto justify-center'>
            Instagram
        </p>
        </a>
    </div>
  )
}

export default JoinInvitation