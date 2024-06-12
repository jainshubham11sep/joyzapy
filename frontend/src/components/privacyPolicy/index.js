import React from 'react'
import styles from "./privacy.module.css"

function PrivacyPolicy() {
    return (
        <>
            <div className='flex flex-col gap-[64px] px-[40px] py-[100px] max-w-[1444px] m-auto  '>
                <div className={`h-[152px] ${styles.background} bg-cover bg-no-repeat rounded-[20px] flex justify-center items-center  `} >
                    <div className='flex flex-col justify-center items-center   '>
                        <p className='text-[35px] font-bold  px-[2px] md:text-[40px]'>Privacy Policy  </p>


                    </div>
                </div>
                <hr />
                <div className='flex flex-col gap-[20px] '>
                    <p className='font-[14px] font-normal  leading-[28.8px] tradcking-[0.8px] text-white md:text-[16px]'>Miniblox is an online game featuring voxelated graphics and a diverse selection of minigames. Explore endless possibilities as you delve into a vibrant world of creativity and competition. Join in, and let the voxel adventures begin!</p>
                    <div className='flex flex-col gap-[10px]'>
                        <p className='text-white font-bold text-[20px] '>
                            How to play
                        </p>
                        <ul className='list-disc px-[25px] flex flex-col gap-[12px] md:gap-[8px] '>
                            <li className='text-white  text-[14px] md:text-[16px]'>Core game modes</li>
                            <li className='text-white  text-[14px] md:text-[16px]'>The two core game modes in Miniblox are survival and creative. Much like Minecraft, survival involves starting out with nothing with a survivalist aim, whereas creative mode gives you free rein to do what you want. If you want to be sure you join a game filled with other players, click browse to view the list of active games with players in!</li>
                            <li className='text-white  text-[14px] md:text-[16px]'>World creation</li>
                            <li className='text-white  text-[14px] md:text-[16px]'>Like other creative voxelated games, you can harvest resources, mine the Earth, build structures, and craft various items to advance. You can also create and load worlds with unique characteristics, terrains, and use custom seeds to generate worlds with a custom set of preferences.</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <p className='text-white font-bold text-[20px] '>
                            Category
                        </p>
                        <p className='text-white text-[14px] md:text-[16px] leading-[28.8px] tracking-[0.8px] font-normal'>Action</p>
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <p className='text-white font-bold text-[20px] '>
                        Studio/Developer
                        </p>
                        <p className='text-white text-[14px] md:text-[16px] leading-[28.8px] tracking-[0.8px] font-normal'>Harsola studios</p>
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <p className='text-white font-bold text-[20px] '>
                        Release date
                        </p>
                        <p className='text-white text-[14px] md:text-[16px] leading-[28.8px] tracking-[0.8px] font-normal'>2 july 2014</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy
