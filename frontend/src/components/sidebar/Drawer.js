"use client";
import Box from "@mui/material/Box";
import { useDrawerContext } from "@/context/drawerContext";
import Link from "next/link";
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import HomeIcon from '../../../public/nextAssets/homeIcon.svg'
import AboutIcon from '../../../public/nextAssets/aboutIcon.svg'
import FeaturedIcon from '../../../public/nextAssets/featuredIcon.svg'
import Image from "next/image";

export default function CustomDrawer({ gameCategories }) {
  const { drawerOpen, setDrawerOpen } = useDrawerContext();
  
  const handleLinkClick = () => {
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <div
        className={`hidden md:flex bg-[#11101D] text-[#FFF] w-min py-[31px] flex-col items-center justify-center gap-10 ${drawerOpen ? "" : ""
          }`}
      >
        <div className="flex flex-col items-center justify-between h-[100vh]">
          <div className="flex flex-col items-start justify-start gap-4 w-max">


            <Link //all Games
              href="/"
              className="w-full hover:bg-sky-700 duration-700"
            >
              <button
                className="flex items-center justify-center py-[14px] px-[21px] gap-8 "
                onClick={handleLinkClick}
              >
                {drawerOpen ? (
                  <Image src={HomeIcon} alt="home icon"/>
                ) : (
                  <Tooltip TransitionComponent={Zoom} title="Home" placement="right-start">
                    <Image src={HomeIcon} alt="home icon"/>
                  </Tooltip>
                )}

                <p
                  className={`text-[18px] font-normal ${drawerOpen ? "block" : "hidden"
                    }`}
                >
                  Home
                </p>
              </button>
            </Link>

            {/* <button
              className="flex items-center justify-start py-[14px] px-[21px] gap-8 w-full hover:bg-sky-700 duration-700"
              onClick={handleLinkClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <g clipPath="url(#clip0_310_113)">
                  <path
                    d="M12.5 0C9.5455 0.00210637 6.69613 1.09662 4.5 3.073V1C4.5 0.734784 4.39464 0.48043 4.20711 0.292893C4.01957 0.105357 3.76522 0 3.5 0C3.23478 0 2.98043 0.105357 2.79289 0.292893C2.60536 0.48043 2.5 0.734784 2.5 1V4C2.5 4.79565 2.81607 5.55871 3.37868 6.12132C3.94129 6.68393 4.70435 7 5.5 7H8.5C8.76522 7 9.01957 6.89464 9.20711 6.70711C9.39464 6.51957 9.5 6.26522 9.5 6C9.5 5.73478 9.39464 5.48043 9.20711 5.29289C9.01957 5.10536 8.76522 5 8.5 5H5.5C5.46628 4.995 5.43289 4.98799 5.4 4.979C7.02952 3.33783 9.17813 2.31308 11.4791 2.07967C13.78 1.84626 16.0906 2.41866 18.0165 3.69916C19.9424 4.97967 21.3642 6.88889 22.0392 9.10095C22.7142 11.313 22.6005 13.6908 21.7176 15.8283C20.8347 17.9659 19.2372 19.7308 17.198 20.8218C15.1587 21.9127 12.804 22.2621 10.5358 21.8102C8.26764 21.3584 6.22659 20.1333 4.76106 18.3442C3.29553 16.5551 2.49637 14.3127 2.5 12C2.5 11.7348 2.39464 11.4804 2.20711 11.2929C2.01957 11.1054 1.76522 11 1.5 11C1.23478 11 0.98043 11.1054 0.792893 11.2929C0.605357 11.4804 0.5 11.7348 0.5 12C0.5 14.3734 1.20379 16.6935 2.52236 18.6668C3.84094 20.6402 5.71509 22.1783 7.9078 23.0866C10.1005 23.9948 12.5133 24.2324 14.8411 23.7694C17.1689 23.3064 19.3071 22.1635 20.9853 20.4853C22.6635 18.8071 23.8064 16.6689 24.2694 14.3411C24.7324 12.0133 24.4948 9.60051 23.5866 7.4078C22.6783 5.21509 21.1402 3.34094 19.1668 2.02236C17.1935 0.703788 14.8734 0 12.5 0V0Z"
                    fill="#FEFEFE"
                  />
                  <path
                    d="M12.5 6C12.2348 6 11.9804 6.10536 11.7929 6.29289C11.6054 6.48043 11.5 6.73478 11.5 7V12C11.5001 12.2652 11.6055 12.5195 11.793 12.707L14.793 15.707C14.9816 15.8892 15.2342 15.99 15.4964 15.9877C15.7586 15.9854 16.0094 15.8802 16.1948 15.6948C16.3802 15.5094 16.4854 15.2586 16.4877 14.9964C16.49 14.7342 16.3892 14.4816 16.207 14.293L13.5 11.586V7C13.5 6.73478 13.3946 6.48043 13.2071 6.29289C13.0196 6.10536 12.7652 6 12.5 6Z"
                    fill="#FEFEFE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_310_113">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p
                className={`text-[18px] font-normal  ${
                  drawerOpen ? "block" : "hidden"
                }`}
              >
                Recently Played
              </p>
            </button> */}

            {/* <button
              className="flex items-center justify-start py-[14px] px-[21px] gap-8 w-full hover:bg-sky-700 duration-700"
              onClick={handleLinkClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <g clipPath="url(#clip0_310_117)">
                  <path
                    d="M18 1.9165C16.8739 1.93402 15.7724 2.24836 14.8067 2.82778C13.841 3.40719 13.0453 4.23117 12.5 5.2165C11.9546 4.23117 11.1589 3.40719 10.1932 2.82778C9.2275 2.24836 8.12601 1.93402 6.99996 1.9165C5.2049 1.99449 3.51366 2.77976 2.29574 4.10074C1.07782 5.42171 0.432208 7.17103 0.499958 8.9665C0.499958 13.5135 5.28596 18.4795 9.29996 21.8465C10.1962 22.5996 11.3293 23.0125 12.5 23.0125C13.6706 23.0125 14.8037 22.5996 15.7 21.8465C19.714 18.4795 24.5 13.5135 24.5 8.9665C24.5677 7.17103 23.9221 5.42171 22.7042 4.10074C21.4863 2.77976 19.795 1.99449 18 1.9165ZM14.415 20.3165C13.8789 20.7679 13.2007 21.0154 12.5 21.0154C11.7992 21.0154 11.121 20.7679 10.585 20.3165C5.44696 16.0055 2.49996 11.8695 2.49996 8.9665C2.4316 7.70122 2.86632 6.46023 3.70932 5.5142C4.55232 4.56817 5.73519 3.99385 6.99996 3.9165C8.26472 3.99385 9.4476 4.56817 10.2906 5.5142C11.1336 6.46023 11.5683 7.70122 11.5 8.9665C11.5 9.23172 11.6053 9.48607 11.7929 9.67361C11.9804 9.86115 12.2347 9.9665 12.5 9.9665C12.7652 9.9665 13.0195 9.86115 13.2071 9.67361C13.3946 9.48607 13.5 9.23172 13.5 8.9665C13.4316 7.70122 13.8663 6.46023 14.7093 5.5142C15.5523 4.56817 16.7352 3.99385 18 3.9165C19.2647 3.99385 20.4476 4.56817 21.2906 5.5142C22.1336 6.46023 22.5683 7.70122 22.5 8.9665C22.5 11.8695 19.553 16.0055 14.415 20.3125V20.3165Z"
                    fill="#FEFEFE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_310_117">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p
                className={`text-[18px] font-normal ${
                  drawerOpen ? "block" : "hidden"
                }`}
              >
                Wishlist
              </p>
            </button> */}

            {/* line div */}
            <div className="w-full h-[1px] bg-[#FFF]"></div>

            <Link 
              href="/game/featured"
              className=" hover:bg-sky-700 duration-700 w-full"
            >
              <button
                className="flex items-center justify-center py-[14px] px-[21px] gap-8"
                onClick={handleLinkClick}
              >
                {drawerOpen ? (
                  <Image src={FeaturedIcon} alt="feature icon" />
                ) : (
                  <Tooltip TransitionComponent={Zoom} title="Featured Games" placement="right-start">
                    <Image src={FeaturedIcon} alt="feature icon" />
                  </Tooltip>
                )}
                <p
                  className={`text-[18px] font-normal  ${drawerOpen ? "block" : "hidden"
                    }`}
                >
                  Featured
                </p>
              </button>
            </Link>
            {/* { gameCategories.map((data, index) => {
                return (
                  <Link
                    href={"/games" + "/" + data.cat_name}
                  >
                    <button className="flex items-center justify-center py-[14px] px-[21px] gap-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                      >
                        <path
                          d="M10.2389 8.12254C9.63553 5.87615 8.66681 3.74432 7.37147 1.81241C6.74526 0.783599 5.40361 0.457255 4.37484 1.08346C4.12917 1.23299 3.91551 1.42968 3.74615 1.66213C3.34851 2.22308 2.98594 2.80813 2.66048 3.4138C0.548341 7.19835 -0.410909 11.6326 0.760967 15.8736C1.37278 18.1409 2.3535 20.292 3.66389 22.2407C4.32192 23.2548 5.6774 23.5435 6.6915 22.8854C6.94931 22.7181 7.16897 22.4985 7.33626 22.2407C9.76805 18.9157 11.7199 12.6665 10.2389 8.12254ZM8.17158 16.0034C6.3682 17.4805 3.70884 17.216 2.23176 15.4125C2.21184 15.3882 2.1922 15.3637 2.17284 15.3389C1.488 12.596 1.6545 9.70949 2.65022 7.06344C4.41155 8.08972 6.58861 8.08972 8.34994 7.06344C9.34565 9.70949 9.51215 12.596 8.82731 15.3389C8.63048 15.581 8.41092 15.8034 8.17158 16.0034ZM6.0517 2.55636C6.72098 3.52691 7.29548 4.55947 7.76733 5.63985C6.39079 6.54294 4.60959 6.54299 3.23306 5.63999C3.59137 4.82493 4.00603 4.03579 4.47398 3.27829C4.81045 2.65986 5.37183 1.78715 6.0517 2.55636ZM6.08676 21.4101C5.883 21.7341 5.45517 21.8316 5.13117 21.6279C5.04319 21.5726 4.96875 21.4981 4.91344 21.4101C4.17647 20.3042 3.54525 19.1313 3.02817 17.907C4.59019 18.6595 6.40997 18.6595 7.97203 17.907C7.45495 19.1313 6.82373 20.3042 6.08676 21.4101Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M7 11.25C7.41423 11.2421 7.74358 10.8998 7.73566 10.4856C7.72792 10.0826 7.40303 9.75767 6.99995 9.74999H6.25C6.24194 9.33575 5.89961 9.00655 5.48538 9.01461C5.08253 9.02249 4.75783 9.34714 4.75 9.74999H4C3.58581 9.75856 3.25698 10.1013 3.26552 10.5155C3.27381 10.9176 3.59786 11.2417 4.00005 11.25H4.75V12.75H4C3.58577 12.75 3.25 13.0858 3.25 13.5C3.25 13.9142 3.58577 14.25 4 14.25H4.75C4.75806 14.6642 5.10039 14.9934 5.51462 14.9854C5.91747 14.9775 6.24217 14.6528 6.25 14.25H7C7.41423 14.2421 7.74358 13.8998 7.73566 13.4856C7.72792 13.0826 7.40303 12.7577 6.99995 12.75H6.25V11.25H7Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M22.75 4.50001C22.7491 3.25656 21.7404 2.24922 20.4969 2.25006C19.8963 2.25048 19.3207 2.49086 18.8982 2.91775C17.5992 2.04011 15.8969 2.04109 14.5989 2.92028C13.7201 2.04367 12.2971 2.04541 11.4205 2.92417C10.9099 3.43605 10.6767 4.16237 10.7939 4.87581C10.7962 4.97387 12.2421 16.4459 12.25 16.5463V18.75C12.4579 24.7004 21.0387 24.7089 21.25 18.7499V16.5461L22.6972 4.96473C22.6972 4.96473 22.737 4.74137 22.75 4.50001ZM13.75 17.25H19.75V18H13.75V17.25ZM20.5 3.75001C20.9283 3.76042 21.267 4.11606 21.2566 4.54436C21.2545 4.63244 19.8379 15.75 19.8379 15.75H19.0482L19.75 4.50001C19.7504 4.08597 20.0859 3.75044 20.5 3.75001ZM16.75 3.75001C17.6468 3.75001 18.2426 4.1965 18.2488 4.49509L17.5454 15.75H15.9545L15.25 4.50001C15.25 4.20156 15.8484 3.75001 16.75 3.75001ZM13 3.75001C13.422 3.75667 13.7587 4.1042 13.7521 4.52622C13.752 4.53311 13.7517 4.54 13.7515 4.54689L14.4516 15.75H13.6621L12.2939 4.80175C12.1414 4.4012 12.3426 3.95294 12.7431 3.8005C12.8253 3.76928 12.9121 3.75217 13 3.75001ZM16.75 21.75C15.3858 21.7461 14.1964 20.8212 13.8565 19.5H19.6435C19.3036 20.8212 18.1142 21.7461 16.75 21.75Z"
                          fill="#FEFEFE"
                        />
                      </svg>

                      <p
                        className={`text-[18px] font-normal justify-self-end   ${drawerOpen ? "block" : "hidden"
                          }`}
                      >
                        {data?.cat_name}
                      </p>
                    </button>
                  </Link>
                )
              })
            } */}
            <div className="w-full h-[1px] bg-[#FFF]"></div>
            <Link
              href="/about-us"
              className=" hover:bg-sky-700 duration-700 w-full"
            >
              <button
                className="flex items-center justify-center py-[14px] px-[21px] gap-8"
                onClick={handleLinkClick}
              >
                {drawerOpen ? (
                  <Image src={AboutIcon} alt="aboutus icon" />
                ) : (
                  <Tooltip TransitionComponent={Zoom} title="About Us" placement="right-start">
                    <Image src={AboutIcon} alt="aboutus icon"/>
                  </Tooltip>
                )}
                <p
                  className={`text-[18px] font-normal  ${drawerOpen ? "block" : "hidden"
                    }`}
                >
                  About
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Box>
  );
}
