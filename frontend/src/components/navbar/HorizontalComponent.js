import React from 'react'
import CustomDrawer from './Drawer'

const HorizontalComponent = () => {
  return (
    <div className='bg-[#11101D] flex items-center justify-between px-[10px] py-2 md:px-10 md:py-[30px] w-full max-h-[110px] md:ml-20 max-w-[1440px]' >

    <div className='flex items-center gap-2'>

        {/* <img className='p-2 md:hidden md:p-0' src={"/assets/menu.svg"} alt="menu-bar" /> */}
        <div className='flex md:hidden'>
          <CustomDrawer />
        </div>
        
        <div className='flex items-center justify-center gap-2 md:gap-4 md:px-4 '>

            <img src={"/assets/header_icon.svg"} alt="header-console" />

            <h1 className='text-[18px] font-semibold text-[#FFF] md:text-[25px]'>Game <span className='text-[#15AEE3]'>Hub</span></h1>
        </div>
    </div>

    <div className='flex items-center gap-[22px] px-[15px] py-2 rounded-xl md:w-[300px] lg:w-[464px] md:bg-[rgba(196,196,196,0.5)]'>
        
        <img src={"/assets/magnifying_glass.svg"} alt="magnifying-glass" />

        <input className='hidden md:block bg-[rgba(196,196,196,0.01)] focus:outline-none placeholder:text-[#FFF] placeholder:text-[20px] placeholder:font-normal' type="text" placeholder='Search...' />
        
    </div>
</div>
  )
}

export default HorizontalComponent