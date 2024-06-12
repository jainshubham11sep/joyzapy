"use client";

import Image from "next/image";

const RelatedGames = () => {
  const imageData = [
    { image: "/assets/relatedgames/1.png", name: "olx" },
    { image: "/assets/relatedgames/2.png", name: "Store Manager" },
    { image: "/assets/relatedgames/3.png", name: "Store Manager" },
    { image: "/assets/relatedgames/4.png", name: "Stickman Destruction" },
    { image: "/assets/relatedgames/1.png", name: "olx" },
    { image: "/assets/relatedgames/2.png", name: "Store Manager" },
    { image: "/assets/relatedgames/3.png", name: "Store Manager" },
    { image: "/assets/relatedgames/4.png", name: "Stickman Destruction" },
  ];
  return (
    <div className="">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-[24px] items-center">
          <div className="text-[25px] font-bold leading-normal">
            Related Games
          </div>
          <div className="text-[#15AEE3] text-[16px] font-normal leading-[0.8px] cursor-pointer">
            sell all
          </div>
        </div>
        <div className="">
          <div className=" flex gap-20 overflow-x-scroll">
            {imageData.map((data, index) => {
              return (
                <div className=" shrink-0 flex flex-col gap-[17px] relative">
                  <Image
                    className="rounded-2xl"
                    src={data.image}
                    width={300}
                    height={3000}
                  />
                  <div className="absolute top-[16px] right-[15px] bg-[#5744B8]/60 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_112_474)">
                        <path
                          d="M17.75 1.91653C16.6239 1.93405 15.5224 2.24839 14.5568 2.82781C13.5911 3.40722 12.7953 4.2312 12.25 5.21653C11.7046 4.2312 10.9089 3.40722 9.94323 2.82781C8.97753 2.24839 7.87604 1.93405 6.74999 1.91653C4.95493 1.99453 3.26369 2.77979 2.04577 4.10077C0.827848 5.42175 0.182238 7.17106 0.249989 8.96653C0.249989 13.5135 5.03599 18.4795 9.04999 21.8465C9.94621 22.5997 11.0793 23.0126 12.25 23.0126C13.4206 23.0126 14.5538 22.5997 15.45 21.8465C19.464 18.4795 24.25 13.5135 24.25 8.96653C24.3177 7.17106 23.6721 5.42175 22.4542 4.10077C21.2363 2.77979 19.545 1.99453 17.75 1.91653ZM14.165 20.3165C13.629 20.7679 12.9507 21.0154 12.25 21.0154C11.5492 21.0154 10.871 20.7679 10.335 20.3165C5.19699 16.0055 2.24999 11.8695 2.24999 8.96653C2.18163 7.70125 2.61635 6.46026 3.45935 5.51423C4.30235 4.5682 5.48522 3.99388 6.74999 3.91653C8.01476 3.99388 9.19763 4.5682 10.0406 5.51423C10.8836 6.46026 11.3183 7.70125 11.25 8.96653C11.25 9.23175 11.3553 9.4861 11.5429 9.67364C11.7304 9.86118 11.9848 9.96653 12.25 9.96653C12.5152 9.96653 12.7696 9.86118 12.9571 9.67364C13.1446 9.4861 13.25 9.23175 13.25 8.96653C13.1816 7.70125 13.6164 6.46026 14.4594 5.51423C15.3023 4.5682 16.4852 3.99388 17.75 3.91653C19.0148 3.99388 20.1976 4.5682 21.0406 5.51423C21.8836 6.46026 22.3183 7.70125 22.25 8.96653C22.25 11.8695 19.303 16.0055 14.165 20.3125V20.3165Z"
                          fill="#FEFEFE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_112_474">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.25)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="text-[18px] font-medium">{data.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RelatedGames;
