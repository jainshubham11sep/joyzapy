"use client";
import FeaturedGames from "../home/featuredGames";
import Relatedgames from "./relatedGames";
import Image from "next/image";

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



const Product_details = ({ data, featureGameData,relatedgames }) => {

  console.log(data,"datadata")

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      console.error(`Invalid date string: ${dateString}`);
      return 'Invalid Date';
    }
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className=" ">
      <div className="flex flex-col items-center gap-[56px] self-stretch bg-[#1F1F29] text-[#FEFEFE] w-full">
        <div className="md:px-[46px] md:py-[40px] flex flex-col gap-[48px] self-stretch md:bg-[#11101D] rounded-[30px] w-full">
          <div className="flex  gap-[16px]  w-full">
            <div className="  flex flex-col basis-[100%] md:basis-[70%] gap-[13px] md:gap-[24px] items-start w-full">
              <div className="flex relative  justify-center items-center  w-full  bg-cover bg-no-repeat rounded-[32px] aspect-video overflow-hidden ">
                <Image
                  height={500}
                  width={500}
                  className="absolute w-full h-full z-[0] rounded-[30px]"
                  src="/assets/miniblox.png"
                />
                <div className="  bg-[#11101D]/60 flex justify-center items-center rounded-full aspect-square p-48  absolute "></div>
                <div className="z-[10] flex gap-[16px] items-center justify-center bg-[#0088DC] text-[#F4F4F4] text-[16px]  md:text-[25px]   px-[24px] py-[8px]  rounded-[12px] cursor-pointer">
                  <div className="">Play Now</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_242_158)">
                        <path
                          d="M13.6613 5.31296L7.30266 0.65029C6.80601 0.286613 6.21835 0.0675647 5.60483 0.0174251C4.99131 -0.0327145 4.37589 0.0880131 3.82678 0.366226C3.27767 0.644439 2.81633 1.06927 2.49388 1.59363C2.17144 2.11799 2.00049 2.72139 1.99999 3.33696V12.667C1.99903 13.2831 2.16909 13.8875 2.49122 14.4127C2.81336 14.938 3.27494 15.3635 3.82458 15.642C4.37423 15.9205 4.99038 16.041 5.60444 15.9901C6.2185 15.9392 6.80639 15.7188 7.30266 15.3536L13.6613 10.691C14.0832 10.3813 14.4263 9.9767 14.6628 9.50983C14.8993 9.04296 15.0225 8.52697 15.0225 8.00362C15.0225 7.48028 14.8993 6.96429 14.6628 6.49742C14.4263 6.03055 14.0832 5.62592 13.6613 5.31629V5.31296Z"
                          fill="#FEFEFE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_242_158">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center self-stretch text-white ">
                <div className="flex  gap-[8px] items-start flex-1   md:text-[16px] text-[12px] ">
                  <button className="min-w-fit py-[8px] px-[16px] flex flex-1 justify-center items-center grow shrink-0 rounded-[30px] bg-[#373952] hover:bg-[#9f9fa6] duration-500">
                    Share
                  </button>
                  <button className="min-w-fit py-[8px] px-[16px] flex flex-1 justify-center items-center grow shrink-0 rounded-[30px] bg-[#373952] gap-[8px] hover:bg-[#9f9fa6] duration-500">
                    <div>Whishlist</div>
                    <div>
                      <svg
                        className="w-[16px] h-[16px] md:w-[25px] md:h-[25px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_59_625)">
                          <path
                            d="M17.75 2.4165C16.6239 2.43402 15.5224 2.74836 14.5568 3.32778C13.5911 3.90719 12.7953 4.73117 12.25 5.7165C11.7046 4.73117 10.9089 3.90719 9.94323 3.32778C8.97753 2.74836 7.87604 2.43402 6.74999 2.4165C4.95493 2.49449 3.26369 3.27976 2.04577 4.60074C0.827848 5.92171 0.182238 7.67103 0.249989 9.4665C0.249989 14.0135 5.03599 18.9795 9.04999 22.3465C9.94621 23.0996 11.0793 23.5125 12.25 23.5125C13.4206 23.5125 14.5538 23.0996 15.45 22.3465C19.464 18.9795 24.25 14.0135 24.25 9.4665C24.3177 7.67103 23.6721 5.92171 22.4542 4.60074C21.2363 3.27976 19.545 2.49449 17.75 2.4165ZM14.165 20.8165C13.629 21.2679 12.9507 21.5154 12.25 21.5154C11.5492 21.5154 10.871 21.2679 10.335 20.8165C5.19699 16.5055 2.24999 12.3695 2.24999 9.4665C2.18163 8.20122 2.61635 6.96023 3.45935 6.0142C4.30235 5.06817 5.48522 4.49385 6.74999 4.4165C8.01476 4.49385 9.19763 5.06817 10.0406 6.0142C10.8836 6.96023 11.3183 8.20122 11.25 9.4665C11.25 9.73172 11.3553 9.98607 11.5429 10.1736C11.7304 10.3611 11.9848 10.4665 12.25 10.4665C12.5152 10.4665 12.7696 10.3611 12.9571 10.1736C13.1446 9.98607 13.25 9.73172 13.25 9.4665C13.1816 8.20122 13.6164 6.96023 14.4594 6.0142C15.3023 5.06817 16.4852 4.49385 17.75 4.4165C19.0148 4.49385 20.1976 5.06817 21.0406 6.0142C21.8836 6.96023 22.3183 8.20122 22.25 9.4665C22.25 12.3695 19.303 16.5055 14.165 20.8125V20.8165Z"
                            fill="#FEFEFE"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_59_625">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0.25 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </button>
                </div>
                <button className="flex-1 px-2 ">
                  <svg
                    className="float-end"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_175_939)">
                      <path
                        d="M18.9998 24.4999H16.9998C16.7346 24.4999 16.4803 24.3945 16.2927 24.207C16.1052 24.0194 15.9998 23.7651 15.9998 23.4999C15.9998 23.2346 16.1052 22.9803 16.2927 22.7928C16.4803 22.6052 16.7346 22.4999 16.9998 22.4999H18.9998C19.7955 22.4999 20.5586 22.1838 21.1212 21.6212C21.6838 21.0586 21.9998 20.2955 21.9998 19.4999V17.4999C21.9998 17.2347 22.1052 16.9803 22.2927 16.7928C22.4803 16.6052 22.7346 16.4999 22.9998 16.4999C23.265 16.4999 23.5194 16.6052 23.7069 16.7928C23.8945 16.9803 23.9998 17.2347 23.9998 17.4999V19.4999C23.9982 20.8255 23.471 22.0963 22.5336 23.0336C21.5963 23.971 20.3254 24.4983 18.9998 24.4999Z"
                        fill="#FEFEFE"
                      />
                      <path
                        d="M1 8.5C0.734784 8.5 0.48043 8.39464 0.292893 8.20711C0.105357 8.01957 0 7.76522 0 7.5V5.5C0.00158786 4.17441 0.528882 2.90356 1.46622 1.96622C2.40356 1.02888 3.67441 0.501588 5 0.5L7 0.5C7.26522 0.5 7.51957 0.605357 7.70711 0.792893C7.89464 0.98043 8 1.23478 8 1.5C8 1.76522 7.89464 2.01957 7.70711 2.20711C7.51957 2.39464 7.26522 2.5 7 2.5H5C4.20435 2.5 3.44129 2.81607 2.87868 3.37868C2.31607 3.94129 2 4.70435 2 5.5V7.5C2 7.76522 1.89464 8.01957 1.70711 8.20711C1.51957 8.39464 1.26522 8.5 1 8.5Z"
                        fill="#FEFEFE"
                      />
                      <path
                        d="M7 24.4999H5C3.67441 24.4983 2.40356 23.971 1.46622 23.0336C0.528882 22.0963 0.00158786 20.8255 0 19.4999L0 17.4999C0 17.2347 0.105357 16.9803 0.292893 16.7928C0.48043 16.6052 0.734784 16.4999 1 16.4999C1.26522 16.4999 1.51957 16.6052 1.70711 16.7928C1.89464 16.9803 2 17.2347 2 17.4999V19.4999C2 20.2955 2.31607 21.0586 2.87868 21.6212C3.44129 22.1838 4.20435 22.4999 5 22.4999H7C7.26522 22.4999 7.51957 22.6052 7.70711 22.7928C7.89464 22.9803 8 23.2346 8 23.4999C8 23.7651 7.89464 24.0194 7.70711 24.207C7.51957 24.3945 7.26522 24.4999 7 24.4999Z"
                        fill="#FEFEFE"
                      />
                      <path
                        d="M22.9998 8.5C22.7346 8.5 22.4803 8.39464 22.2927 8.20711C22.1052 8.01957 21.9998 7.76522 21.9998 7.5V5.5C21.9998 4.70435 21.6838 3.94129 21.1212 3.37868C20.5586 2.81607 19.7955 2.5 18.9998 2.5H16.9998C16.7346 2.5 16.4803 2.39464 16.2927 2.20711C16.1052 2.01957 15.9998 1.76522 15.9998 1.5C15.9998 1.23478 16.1052 0.98043 16.2927 0.792893C16.4803 0.605357 16.7346 0.5 16.9998 0.5H18.9998C20.3254 0.501588 21.5963 1.02888 22.5336 1.96622C23.471 2.90356 23.9982 4.17441 23.9998 5.5V7.5C23.9998 7.76522 23.8945 8.01957 23.7069 8.20711C23.5194 8.39464 23.265 8.5 22.9998 8.5Z"
                        fill="#FEFEFE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_175_939">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className=" hidden md:flex basis-[30%] bg-[#D9D9D9]/20 text-white justify-center items-center text-center text-3xl ">
              Ad space
            </div>
          </div>

          <div className=" flex-col items-start gap-6 self-stretch hidden md:flex">
            <div className="w-full h-[1px]  bg-[#fff]/[0.34] mb-6"></div>
            <div className="text-[18px] font-semibold mb-6">
              Home/<span className="text-[#15AEE3]"> {data?.game_name} </span>
            </div>
            <div className="text-[35px] font-bold mb-6">{data?.game_name}</div>
            <p className=" leading-[28.8px] tracking-[0.8px] mb-6">
              {data?.description}
            </p>

            <div className="mb-6">
              <h2 className="text-[35px] font-bold">How to play</h2>
              <ul className="list-disc list-inside leading-[28.8px] tracking-[0.8px]  pl-[1em] ">
                <li className="pl-[1em] indent-[-1em] ">Core game modes</li>
                <li className="pl-[1.5em] indent-[-1.5em] ">
                  The two core game modes in Miniblox are survival and creative.
                  Much like Minecraft, survival involves starting out with
                  nothing with a survivalist aim, whereas creative mode gives
                  you free rein to do what you want. If you want to be sure you
                  join a game filled with other players, click browse to view
                  the list of active games with players in!
                </li>
                <li className="pl-[1.5em] indent-[-1.5em] ">World creation</li>
                <li className="pl-[1.5em] indent-[-1.5em] ">
                  Like other creative voxelated games, you can harvest
                  resources, mine the Earth, build structures, and craft various
                  items to advance. You can also create and load worlds with
                  unique characteristics, terrains, and use custom seeds to
                  generate worlds with a custom set of preferences.
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <div className="text-xl font-bold ">Category</div>
              <div className=" leading-[28.8px] tracking-[0.8px]">Action</div>
            </div>
            <div className="mb-6">
              <div className="text-xl font-bold ">Studio/Developer</div>
              <div className=" leading-[28.8px] tracking-[0.8px]">
                {data?.developer_name}
              </div>
            </div>
            <div>
              <div className="text-xl font-bold ">Release date</div>
              <div className=" leading-[28.8px] tracking-[0.8px]">{formatDate(data?.release_date)}</div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <FeaturedGames title={"Featured Games"} imageData={imageData} gameData={featureGameData} />
          <FeaturedGames title={"Related Games"} imageData={imageData} relatedgames={relatedgames}  />
        </div>
      </div>
    </div>
  );
};
export default Product_details;
