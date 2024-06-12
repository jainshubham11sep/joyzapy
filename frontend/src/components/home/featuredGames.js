"use client"
import React, { useState ,useRef} from "react";

const FeaturedGames = ({title}) => {
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
            <h3 className="font-montserrat font-bold text-[25px] leading-[30.48px] text-[#FFFFFF] max-[600px]:text-lg max-[600px]:leading-[21.94px] max-[600px]:font-semibold">
              {title}
            </h3>
            <img
              src={"/assets/gamepad.png"}
              alt="gamepad"
              className="w-6 h-6 max-[600px]:h-[18.92px]"
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
            <img
              src={"/assets/arrow.png"}
              alt="image"
              className=" absolute right-[15px] lg:right-[33px]"
            />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-scroll no_scrollbar z-[2]"
          >
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 relative w-[calc(100%/4)] min-w-[300px] max-[600px]:min-w-[164px]"
                >
                  <img
                    src={"/assets/gameImage.png"}
                    alt="game image"
                    className="h-[180px] rounded-[30px] max-[600px]:h-[114px] max-[600px]:rounded-[8px] z-0"
                  />
                  <h2 className="font-montserrat font-medium text-lg leading-[21.94px] text-[#FFFFFF] max-[600px]:text-base max-[600px]:leading-[28.8px] max-[600px]:tracking-[5%]">
                    Miniblox
                  </h2>
                  <div className="w-11 h-11 rounded-[100px] bg-[#5744B899] flex items-center justify-center gap-2 absolute top-4 right-4 max-[600px]:w-6 max-[600px]:h-6 max-[600px]:top-2 max-[600px]:right-2">
                    <img
                      src={"/assets/Vector.png"}
                      alt="heart image"
                      className="max-[600px]:w-4 max-[600px]:h-4"
                    />
                  </div>
                </div>
              ))}
          </div>
          <button
            className="bg-[#2929299f] backdrop-blur-sm w-[150px] lg:w-[190px] h-[225px] lg:h-[298px] absolute text-white right-[-111px] top-[-33px] rounded-[50%] z-[1] flex items-center"
            onClick={scrollRight}
          >
            <img
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
