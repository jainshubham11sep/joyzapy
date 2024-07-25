import Image from 'next/image'
import React from 'react'


const notfound = () => {
  return (
    <div className='flex flex-col mt-24 mb-10 w-[100%] text-white items-center '>
      <div>
        <Image
width={500}
height={500}
          src={"/nextAssets/404 arror.gif"}
          alt="404 not found"
        />
      </div>
      <div className='text-center'>
        <p className='text-[48px] font-bold' >Error 404</p>
        <p className='font-bold'>Page not found</p>
      </div>
    </div>
  )
}

export default notfound
