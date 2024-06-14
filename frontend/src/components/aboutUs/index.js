import React from "react";
import styles from "./about.module.css";

function AboutUS() {
  return (
    <>
      <div className="flex flex-col gap-[64px] px-5 min-[768px]:px-[20px] min-[1024px]:px-[64px] py-6 max-w-[1444px] m-auto max-[550px]:px-4 max-[700px]:gap-9">
        <div class="text-[18px] font-semibold text-[#FEFEFE]">
          Home/<span class="text-[#15AEE3]"> About Us </span>
        </div>

        <div
          className={`h-[152px] ${styles.background} bg-cover bg-no-repeat rounded-[20px] flex justify-center items-center`}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[40px] font-bold leading-[48px] text-[#333333]">
              About us{" "}
            </h1>
            <p className="text-[18px] font-normal leading-[32.4px] tracking-[0.8px]">
              Since 2020
            </p>
          </div>
        </div>
        <div>
          <p className=" text-white text-[16px] text-center font-normal leading-[28.8px] tracking-[0.8px]">
            The two core game modes in Miniblox are survival and creative. Much
            like Minecraft, survival involves starting out with nothing with a
            survivalist aim, whereas creative mode gives you free rein to do
            what you want. If you want to be sure you join a game filled with
            other players, click browse to view the list of active games with
            players in! World creation Like other creative voxelated games, you
            can harvest resources, mine the Earth, build structures, and craft
            various items to advance. You can also create and load worlds with
            unique characteristics, terrains, and use custom seeds to generate
            worlds with a custom set of preferences.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUS;
