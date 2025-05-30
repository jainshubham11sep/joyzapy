import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "../../../public/nextAssets/homeIcon.svg";
import FeaturedIcon from "../../../public/nextAssets/featuredIcon.svg";
import AboutIcon from "../../../public/nextAssets/aboutIcon.svg";

const drawerWidth = 270;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#11101d",
  color: "#FFF", 
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  color: "#FFF", // Set text color here
}));

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
}));

export default function CustomDrawer({ gameCategories }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {!open && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            zIndex: theme.zIndex.drawer + 1,
          }}
        >
          <Image width={30} height={30} src={"/nextAssets/menu.svg"} alt="menu" />
        </IconButton>
      )}
      {open && (
        <Drawer
          variant="persistent"
          open={open}
          sx={{
            position: "absolute",
          }}
        >
          <div className="flex bg-[#11101D] text-[#FFF] px-4 py-[10px] flex-col items-start justify-start gap-6">
            <div className="flex items-start justify-start">
              <DrawerHeader>
                <button onClick={handleDrawerClose}>
                  <Image
                    width={30}
                    height={30}
                    className="rotate-180"
                    src={"/nextAssets/menu.svg"}
                    alt="menu"
                  />
                </button>
              </DrawerHeader>
            </div>

            <div className="flex flex-col items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-4">
                <Link //all Games
                  href="/"
                  className="hover:bg-sky-700 duration-700 w-full"
                >
                  <button className="flex items-center justify-center py-[14px] px-[21px] gap-8" onClick={handleDrawerClose}>
                    <Image src={HomeIcon} alt="home icon"/>
                    <p className="text-[18px] font-normal">Home</p>
                  </button>
                </Link>

                {/* <button className="flex items-center justify-center py-[14px] px-[21px] gap-8 hover:bg-sky-700 duration-700" onClick={handleDrawerClose}>
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

                  <p className="text-[18px] font-normal">Recently Played</p>
                </button> */}

                {/* <button className="flex items-center justify-start py-[14px] px-[21px] gap-8 hover:bg-sky-700 duration-700 w-full" onClick={handleDrawerClose}>
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

                  <p className="text-[18px] font-normal">Wishlist</p>
                </button> */}

                {/* line div */}
                <div className="w-full h-[1px] bg-[#FFF]"></div>

                <Link 
                  href="/game/featured"
                  className="hover:bg-sky-700 duration-700 w-full"
                >
                  <button className="flex items-center justify-center py-[14px] px-[21px] gap-8" onClick={handleDrawerClose}>
                    <Image src={FeaturedIcon} alt="featured icon"/>

                    <p className="text-[18px] font-normal">Featured</p>
                  </button>
                </Link>


                {/* 
                {
                  gameCategories.map((data, index) => {
                    return (
                      <Link
                        href={"/games" + "/" + data.cat_name}
                      >
                        <button className="flex items-center justify-center py-[14px] px-[21px] gap-8">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_310_121)">
                              <path
                                d="M22.7075 5.02918C21.8112 3.53541 20.2178 2.53955 18.4253 2.53955H6.47511C4.68256 2.53955 3.08923 3.53541 2.19294 5.02918C1.09752 7.0209 0.5 9.21179 0.5 11.5022C0.5 16.9794 2.69089 21.4607 5.47925 21.4607C6.97302 21.4607 8.16805 20.0665 9.0643 17.1786C9.16386 16.7802 9.5622 16.4815 10.0602 16.4815H14.9398C15.3382 16.4815 15.7365 16.7802 15.9357 17.1786C16.832 20.0665 18.027 21.4607 19.5208 21.4607C22.3091 21.4607 24.5 16.9794 24.5 11.5022C24.4004 9.21179 23.8029 7.0209 22.7075 5.02918ZM19.4211 19.469C19.1224 19.469 18.4253 18.6723 17.7282 16.5811C17.3299 15.2865 16.1348 14.4898 14.8402 14.4898H10.0602C8.76556 14.4898 7.57053 15.386 7.17219 16.5811C6.47511 18.6723 5.77798 19.469 5.47925 19.469C4.48339 19.469 2.49172 16.3819 2.49172 11.5022C2.49172 9.61013 2.98962 7.71802 3.88592 6.02508C4.48344 5.12883 5.4793 4.53132 6.47516 4.53132H18.4254C19.4212 4.53132 20.4171 5.12883 21.0146 6.02508C21.9109 7.71802 22.4088 9.61013 22.4088 11.5022C22.4087 16.3819 20.417 19.469 19.4211 19.469Z"
                                fill="#FEFEFE"
                              />
                              <path
                                d="M9.49993 9.00002H8.49994V8.00004C8.49994 7.40004 8.09996 7.00006 7.49996 7.00006C6.89996 7.00006 6.49997 7.40004 6.49997 8.00004V9.00002H5.49999C4.89998 9.00002 4.5 9.40001 4.5 10C4.5 10.6 4.89998 11 5.49999 11H6.49992V12C6.49992 12.6 6.89991 13 7.49991 13C8.09991 13 8.4999 12.6 8.4999 12V11H9.49993C10.0999 11 10.4999 10.6001 10.4999 10.0001C10.4999 9.40001 10.0999 9.00002 9.49993 9.00002Z"
                                fill="#FEFEFE"
                              />
                              <path
                                d="M19 10C19.8284 10 20.5 9.32843 20.5 8.5C20.5 7.67157 19.8284 7 19 7C18.1716 7 17.5 7.67157 17.5 8.5C17.5 9.32843 18.1716 10 19 10Z"
                                fill="#FEFEFE"
                              />
                              <path
                                d="M16 13C16.8284 13 17.5 12.3284 17.5 11.5C17.5 10.6716 16.8284 10 16 10C15.1716 10 14.5 10.6716 14.5 11.5C14.5 12.3284 15.1716 13 16 13Z"
                                fill="#FEFEFE"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_310_121">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>

                          <p className="text-[18px] font-normal">{data?.cat_name}</p>
                        </button>
                      </Link>
                    )
                  })
                } */}

                <div className="w-full h-[1px] bg-[#FFF]"></div>

                <Link
                  href="/about-us"
                  className="hover:bg-sky-700 duration-700 w-full"
                >
                  <button className="flex items-center justify-center py-[14px] px-[21px] gap-8" onClick={handleDrawerClose}>
                    <Image src={AboutIcon} alt="aboutus icon"/>

                    <p className="text-[18px] font-normal">About</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Drawer>
      )}
    </Box>
  );
}
