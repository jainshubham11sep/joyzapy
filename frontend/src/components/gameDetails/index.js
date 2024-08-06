"use client";
import FeaturedGames from "../home/featuredGames";
import PlayIcon from "../../../public/nextAssets/playIcon.svg"
import Image from "next/image";
import { useState, useEffect } from "react";

const fallbackImage = 'https://www.punogames.com/assets/test_game_party/featured_img/featured_img-1721440575527.jpg'

const GameDetails = ({ data, featureGameData, relatedgames }) => {



  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showRotateMessage, setShowRotateMessage] = useState(false);
  console.log(data, "datadatadata")
  const checkDevice = () => {
    console.log("i am calleddd")
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(userAgent);
    setIsMobile(isMobileDevice);
    const isLandscapeOrientation = window.orientation === 90 || window.orientation === -90;
    console.log(isLandscapeOrientation,"isLandscapeOrientation")

    if (
      isMobileDevice &&
      ((data?.layout === 'landscape' && !isLandscapeOrientation) ||
        (data?.layout === 'portrait' && isLandscapeOrientation))
    ) {
      setShowRotateMessage(true);
    } else {
      setShowRotateMessage(false);
    }
  };

  useEffect(() => {

    // window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);
    return () => {
      // window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, [data?.layout]);


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

  const handlePlayNow = () => {
    setIsPlaying(true);
  };



  const handleFullscreen = () => {
    checkDevice();
    const iframe = document.getElementById('gameIframe');
    if (iframe && !(isMobile && showRotateMessage)) {
      try {
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
          iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) {
          iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
          iframe.msRequestFullscreen();
        }
      } catch (error) {
        console.error('Error attempting to enable fullscreen:', error);
      }
    } else {
      console.error('Iframe not found or not yet rendered');
    }
  };
  console.log(isMobile,showRotateMessage,"fullscreen")

  return (

    <div className=" ">
      <div className="flex items-center justify-center h-screen text-white" style={{ display: isMobile && showRotateMessage ? "flex" : "none", width: '100vw', height: '100vh', position: "fixed", top: 0, left: 0, zIndex: 999999999, background: '#1f1f29' }}>
        <Image
          width={500}
          height={500}
          src={"/nextAssets/rotatescreen.gif"}
          alt="screen rotate"
        />
      </div>
      <div className="flex flex-col items-center gap-[56px] self-stretch bg-[#1F1F29] text-[#FEFEFE] w-full" style={{ display: isMobile && showRotateMessage ? "none" : "block" }}>
        <div className="md:px-[46px] md:py-[40px] flex flex-col gap-[48px] self-stretch md:bg-[#11101D] rounded-[30px] w-full">
          <div className="flex  gap-[16px]  w-full">
            <div className="  flex flex-col basis-[100%] md:basis-[70%] gap-[13px] md:gap-[24px] items-start w-full">
              <div className="flex relative  justify-center items-center  w-full  bg-cover bg-no-repeat rounded-[32px] aspect-video overflow-hidden ">
                {
                  isPlaying ? (
                    <iframe
                      id="gameIframe"

                      src={data?.game_link}
                      width="100%"
                      height="100%"
                      title={data?.title}
                      className="absolute w-full h-full rounded-[30px]"
                    />
                  ) : (
                    <>
                      <Image
                        height={500}
                        width={500}
                        className="absolute w-full h-full z-[0] rounded-[30px]"
                        src={data?.featured_img ? `https://www.punogames.com/assets${data?.featured_img}` : fallbackImage}
                        alt={data?.game_name}
                      />
                      <div className="  bg-[#11101D]/60 flex justify-center items-center rounded-full aspect-square p-48  absolute "></div>
                      <div className="z-[10] flex gap-[16px] items-center justify-center bg-[#0088DC] text-[#F4F4F4] text-[16px]  md:text-[25px]   px-[24px] py-[8px]  rounded-[12px] cursor-pointer" onClick={handlePlayNow}>
                        <div className="">Play Now</div>
                        <div>
                          <Image src={PlayIcon} alt="playbtn" />
                        </div>
                      </div>
                    </>)
                }

              </div>


              {/* share , wishlist button  */}


              <button
                className=" text-xl flex flex-row"
                onClick={handleFullscreen}
                disabled={!isPlaying}
                style={{
                  opacity: isPlaying ? 1 : 0.5,
                  cursor: isPlaying ? 'pointer' : 'not-allowed',
                }}>
                <p className="px-4">Open in Full screen</p>
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
            <div className=" hidden md:flex basis-[30%] bg-[#D9D9D9]/20 text-white justify-center items-center text-center text-3xl ">
              Ad space
            </div>
          </div>
          <div className="block md:hidden">
            <div className="w-full h-[1px]  bg-[#fff]/[0.34] mb-6"></div>
            <div className="text-[18px] font-semibold mb-6">
              Home/<span className="text-[#15AEE3]"> {data?.title} </span>
            </div>
            <div className="text-[24px] font-bold mb-6">{data?.title}</div>
          </div>
          <div className=" flex-col items-start gap-6 self-stretch hidden md:flex">
            <div className="w-full h-[1px]  bg-[#fff]/[0.34] mb-6"></div>
            <div className="text-[18px] font-semibold mb-6">
              Home/<span className="text-[#15AEE3]"> {data?.title} </span>
            </div>
            <div className="text-[24px] font-bold mb-6">{data?.title}</div>

            <div className="leading-[28.8px] tracking-[0.8px] mb-6" dangerouslySetInnerHTML={{ __html: data?.description }} />

            
            <div className="mb-6">
              <div className="text-xl font-bold ">Category</div>
              <div className=" leading-[28.8px] tracking-[0.8px]">
                {data?.category_names?.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </div>
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
          <FeaturedGames title={"Featured Games"} gameData={featureGameData} />
          <FeaturedGames title={"Related Games"} gameData={relatedgames} />
        </div>
      </div>
    </div>

  )


};
export default GameDetails;
