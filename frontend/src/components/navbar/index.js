
import React from 'react'
// import MiniDrawer from './Drawer'
import HorizontalComponent from './HorizontalComponent'
import VerticalComponent from './VerticalComponent'

const index = () => {
  return (
    <div className='flex bg-[#11101D] w-full relative z-50'>
        <VerticalComponent />
        <HorizontalComponent />
        {/* <MiniDrawer /> */}
    </div>
  )
}

export default index