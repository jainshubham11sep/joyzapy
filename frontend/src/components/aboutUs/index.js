import React from 'react'
import styles from "./about.module.css"

function AboutUS() {
    return (
        <>
            <div className='flex flex-col gap-[64px] px-[40px] py-[100px] max-w-[1444px] m-auto  '>
                <div className={`h-[152px] ${styles.background} bg-cover bg-no-repeat rounded-[20px] flex justify-center items-center  `} >
                    <div className='flex flex-col justify-center items-center   '>
                        <p className='text-[40px] font-bold  '>About us </p>
                        <p className='text-[18px] font-normal   '>Since 2020</p>

                    </div>
                </div>
                <div>
                    <p className=' text-white text-[16px] text-center font-normal leading-[28.8px] tracking-[0.8px]'>
                    The two core game modes in Miniblox are survival and creative. Much like Minecraft, survival involves starting out with nothing with a survivalist aim, whereas creative mode gives you free rein to do what you want. If you want to be sure you join a game filled with other players, click browse to view the list of active games with players in! World creation Like other creative voxelated games, you can harvest resources, mine the Earth, build structures, and craft various items to advance. You can also create and load worlds with unique characteristics, terrains, and use custom seeds to generate worlds with a custom set of preferences.
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutUS
