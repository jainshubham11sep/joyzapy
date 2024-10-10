"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FeaturedGames = ({ title, gameData }) => {

  const router = useRouter()
  const scrollContainerRef = useRef(null);

  const fallbackImage = 'https://www.joyzapy.com/assets/test_game_party/featured_img/featured_img-1721440575527.jpg'

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };


  return (
    <>
      <div className="flex flex-col gap-4 mb-[32px]">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <h3 className="font-montserrat font-bold text-[25px] leading-[30.48px] text-[#FFFFFF] max-[768px]:text-lg max-[768px]:leading-[21.94px] max-[768px]:font-semibold">
              {title}
            </h3>
            <Image
              height={25}
              width={25}
              src={"/nextAssets/gamepad.png"}
              alt="gamepad"
            />
          </div>
          {/* <h3
            className={`font-montserrat font-normal text-base leading-[28.8px] tracking-[5%] text-[#15AEE3] cursor-pointer hover:text-[#42e6ff] ${gameData?.length < 5 ? 'pointer-events-none text-[#b0b0b0]' : ''}`}
            onClick={() => router.push(`/game/${title.split(" ")[0].toLowerCase()}`)}
          >
            See all
          </h3> */}
        </div>

        {/* <div className="overflow-hidden no_scrollbar relative"> */}
        {/* {gameData?.length >= 5 && (
            <button
              className="bg-[#2929299f] backdrop-blur-sm w-[150px] lg:w-[180px] h-[250px] absolute text-white left-[-111px] top-[-33px] rounded-[50%] z-[1] flex items-center"
              onClick={scrollLeft}
            >
              <Image
                width={15}
                height={15}
                src={"/nextAssets/arrow.png"}
                alt="image"
                className=" absolute right-[15px] lg:right-[33px]"
              />
            </button>
          )} */}

        {/* <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-scroll z-[2]"
          > */}
        {/* <div className="flex flex-wrap gap-2 md:gap-6 justify-around md:justify-between"> */}
        <div className={`flex flex-wrap gap-2 md:gap-6 justify-around ${title === "Related Games" ? "md:justify-start" : "md:justify-between"}`}>

          {
            gameData?.map((data, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 cursor-pointer w-[130px] above-375:w-[160px] md:w-[300px]"
                onClick={() => {
                  router.push(`/${data?.game_name}`)
                }}
              >
                <Image
                  width={500}
                  height={500}
                  src={data?.featured_img ? `https://www.joyzapy.com/assets${data?.featured_img}` : fallbackImage}
                  alt={data?.title}
                  className=" rounded-[30px]  max-[768px]:rounded-[8px] z-0 hover:scale-105 duration-500 max-[375px]:min-h-[90px]  min-h-[100px] md:h-[180px]"
                />
                <p className="font-montserrat font-medium text-lg z-[2] text-[#FFFFFF] max-[768px]:text-base max-[768px]:tracking-[5%] truncate-text">
                  {data?.title}
                </p>
              </div>
            ))}
        </div>

        {/* </div> */}
        {/* {gameData?.length >= 5 && (

            <button
              className="bg-[#2929299f] backdrop-blur-sm w-[150px] lg:w-[180px] h-[250px] absolute text-white right-[-111px] top-[-33px] rounded-[50%] z-[1] flex items-center"
              onClick={scrollRight}
            >
              <Image
                height={15}
                width={15}
                src={"/nextAssets/arrow.png"}
                alt="image"
                className=" absolute left-[15px] lg:left-[33px] rotate-180"
              />

            </button>
          )} */}
        {/* </div> */}
      </div>
    </>
  );
};

export default FeaturedGames;
