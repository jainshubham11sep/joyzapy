import React from "react";
import Image from "next/image";

const SportGame = ({ data }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between font-montserrat">
          <h3 className="font-montserrat font-bold text-[25px] leading-[30.48px] text-[#FFFFFF] max-[600px]:font-semibold max-[600px]:text-lg max-[600px]:leading-[21.94px]">
            Sports Games
          </h3>
          <h3 className="font-montserrat font-normal text-base leading-[28.8px] tracking-[5%] text-[#15AEE3]">
            See all
          </h3>
        </div>

        <div className="flex gap-5 overflow-x-scroll no_scrollbar">
          {data.map((data) => (
            <div className="flex flex-col gap-4 relative min-w-[204px] max-[600px]:min-w-[143px] ">
              <Image
              width={100}
              height={100}
                src={data.image}
                alt="game image"
                className="h-[304px] rounded-[30px] max-[600px]:h-[239px] max-[600px]:rounded-[8px] w-full"
              />
              <h2 className="font-montserrat font-medium text-lg leading-[21.94px] text-[#FFFFFF] max-[600px]:text-base max-[600px]:leading-[28.8px] max-[600px]:tracking-[5%]">
                {data.name}
              </h2>
              <div className="w-11 h-11 rounded-[100px] bg-[#5744B899] flex items-center justify-center gap-2 absolute top-4 right-4 max-[600px]:w-6 max-[600px]:h-6 max-[600px]:top-2 max-[600px]:right-2">
                <Image
                width={100}
                height={100}
                  src={"/assets/Vector.png"}
                  alt="heart image"
                  className="max-[600px]:w-4 max-[600px]:h-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SportGame;
