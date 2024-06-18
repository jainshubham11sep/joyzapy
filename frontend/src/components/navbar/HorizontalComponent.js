"use client";
import React, { useEffect, useState } from "react";
import CustomDrawer from "../sidebar/DrawerMobile";

import { useDrawerContext } from "@/context/drawerContext";

const HorizontalComponent = () => {
  const { drawerOpen, setDrawerOpen } = useDrawerContext();
  const [size, setSize] = useState([0]);

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  console.log(size);

  return (
    <div className="flex items-center justify-center  py-2 px-5 md:px-15 md:py-[30px] max-w-[1444px] m-auto">
      <div className="flex flex-row w-[100%] items-center justify-between">
        <div className="flex items-center justify-between max-[767px]:gap-2 min-[768px]:gap-6 min-[1024px]:gap-16">
          {/* <CustomDrawer /> */}

          {size[0] > 768 ? (
            <button
              onClick={handleDrawer}
              className={`duration-100 ${drawerOpen ? "rotate-180" : ""}`}
            >
              <img src={"/assets/menu.svg"} alt="" />
            </button>
          ) : (
            <CustomDrawer />
          )}

          {/* <img className='p-2 md:hidden md:p-0' src={"/assets/menu.svg"} alt="menu-bar" /> */}
          {/* <div className='flex md:hidden'>
            <CustomDrawer />
          </div> */}

          <div className="flex items-center justify-center max-[1023px]:gap-2 min-[1024px]::gap-4 md:px-4 ">
            <img
              className="self-center pt-1"
              src={"/assets/header_icon.svg"}
              alt="header-console"
            />

            <h1 className="text-[18px] font-semibold text-[#FFF] md:text-[25px]">
              Game <span className="text-[#15AEE3]">Hub</span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-[22px] px-[15px] max-[1023px]:mr-[0px] min-[1024px]:mr-10 py-2 rounded-xl md:w-[300px] lg:w-[464px] md:bg-[rgba(196,196,196,0.5)]">
          <img src={"/assets/magnifying_glass.svg"} alt="magnifying-glass" />

          <input
            className="hidden md:block bg-[rgba(196,196,196,0.01)] focus:outline-none placeholder:text-[#FFF] placeholder:text-[20px] placeholder:font-normal w-full"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalComponent;
