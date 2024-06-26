"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const FeaturedGames = ({ title, data }) => {
  const [items, setItems] = useState([{}]);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust the value to control the scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust the value to control the scroll distance
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <h3 className="font-montserrat font-bold text-[25px] leading-[30.48px] text-[#FFFFFF] max-[768px]:text-lg max-[768px]:leading-[21.94px] max-[768px]:font-semibold">
              {title}
            </h3>
            <Image
              height={25}
              width={25}
              src={"/assets/gamepad.png"}
              alt="gamepad"
            />
          </div>
          <h3 className="font-montserrat font-normal text-base leading-[28.8px] tracking-[5%] text-[#15AEE3]">
            See all
          </h3>
        </div>

        <div className="overflow-hidden no_scrollbar relative">
          <button
            className="bg-[#2929299f] backdrop-blur-sm w-[150px] lg:w-[190px] h-[225px] lg:h-[298px] absolute text-white left-[-111px] top-[-33px] rounded-[50%] z-[1] flex items-center"
            onClick={scrollLeft}
          >
            <Image
              width={15}
              height={15}
              src={"/assets/arrow.png"}
              alt="image"
              className=" absolute right-[15px] lg:right-[33px]"
            />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-scroll no_scrollbar z-[2]"
          >
            {data?.map((data, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 relative w-[calc(100%/4)] min-w-[300px] max-[768px]:min-w-[164px] cursor-pointer"
              >
                <Image
                  width={700}
                  height={700}
                  src={data.image}
                  alt={data.name}
                  className=" rounded-[30px]  max-[768px]:rounded-[8px] z-0 "
                />
                <h2 className="font-montserrat font-medium text-lg z-[2] leading-[21.94px] text-[#FFFFFF] max-[768px]:text-base max-[768px]:leading-[28.8px] max-[768px]:tracking-[5%]">
                  {data.name}
                </h2>
                <div className="w-11 h-11 rounded-[100px] bg-[#5744B899] flex items-center justify-center gap-2 absolute top-4 right-4 max-[768px]:w-6 max-[768px]:h-6 max-[768px]:top-2 max-[768px]:right-2">
                  <Image
                    height={25}
                    width={25}
                    src={"/assets/Vector.png"}
                    alt="heart image"
                    // className="max-[768px]:w-4 max-[768px]:h-4"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            className="bg-[#2929299f] backdrop-blur-sm w-[150px] lg:w-[190px] h-[225px] lg:h-[298px] absolute text-white right-[-111px] top-[-33px] rounded-[50%] z-[1] flex items-center"
            onClick={scrollRight}
          >
            <Image
              height={15}
              width={15}
              src={"/assets/arrow.png"}
              alt="image"
              className=" absolute left-[15px] lg:left-[33px] rotate-180"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedGames;
