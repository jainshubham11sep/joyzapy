"use client";
import React, { useEffect, useState } from "react";
import CustomDrawer from "../sidebar/DrawerMobile";
import Image from "next/image";
import { useDrawerContext } from "@/context/drawerContext";
import { useRouter } from "next/navigation";

const HorizontalComponent = ({ gameCategories, games }) => {
  // console.log(games, "allgaa")

  const { drawerOpen, setDrawerOpen } = useDrawerContext();
  const [size, setSize] = useState([0]);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    // console.log(value, "vallll");
    setQuery(value);

    if (value.length > 2) {
      const filteredGames = games.filter((game) => {
        // console.log(game, "gamaa");
        return game.game_name.toLowerCase().includes(value.toLowerCase());
      });

      // console.log(filteredGames, "filteredGamesfilteredGames");
      setSuggestions(filteredGames);
    } else {
      setSuggestions([]);
    }
  };


  const handleSuggestionClick = (game) => {
    // console.log(game,"gameee")
    router.push(`/${game.game_id}`);
    setQuery('');
    setSuggestions([]);
  };

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
              <Image
                height={30}
                width={30}
                src={"/assets/menu.svg"}
                alt="burger"
              />
            </button>
          ) : (
            <CustomDrawer gameCategories={gameCategories} />
          )}

          {/* <img className='p-2 md:hidden md:p-0' src={"/assets/menu.svg"} alt="menu-bar" /> */}
          {/* <div className='flex md:hidden'>
            <CustomDrawer />
          </div> */}

          <div className="flex items-center justify-center max-[1023px]:gap-2 min-[1024px]::gap-4 md:px-4 ">
            <Image
              height={50}
              width={50}
              className="self-center pt-1"
              src={"/assets/header_icon.svg"}
              alt="header-console"
            />

            <h1 className="text-[18px] font-semibold text-[#FFF] md:text-[25px]">
              Game <span className="text-[#15AEE3]">Hub</span>
            </h1>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center gap-[22px] px-[15px] max-[1023px]:mr-[0px] min-[1024px]:mr-10 py-2 rounded-xl md:w-[300px] lg:w-[464px] md:bg-[rgba(196,196,196,0.5)]">
            <Image
              height={30}
              width={30}
              src={"/assets/magnifying_glass.svg"}
              alt="magnifying-glass"
            />

            <input
              className="hidden md:block text-[20px] bg-[rgba(196,196,196,0.01)] focus:outline-none placeholder:text-[#FFF] placeholder:text-[20px] placeholder:font-normal w-full text-[#fff]"
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search for games..."
            />
          </div>
          {suggestions.length > 0 && (
            <ul className="absolute z-10 w-full mr-10 bg-white shadow-lg rounded-lg mt-2 lg:w-[92%]">
              {suggestions.map((game) => (
                <li
                  key={game._id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(game)}
                >
                  {game.game_name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HorizontalComponent;
