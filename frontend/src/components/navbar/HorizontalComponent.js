"use client";
import React, { useEffect, useState } from "react";
import CustomDrawer from "../sidebar/DrawerMobile";
import Image from "next/image";
import { useDrawerContext } from "@/context/drawerContext";
import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const HorizontalComponent = ({ gameCategories, games }) => {

  const { drawerOpen, setDrawerOpen } = useDrawerContext();
  const [size, setSize] = useState([0]);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" }}
      role="presentation"
    >
      <div className="flex flex-col gap-4 bg-[#11101D] p-4">
        {" "}
        <div className="w-full self-end flex cursor-pointer justify-end float-end"
          onClick={toggleDrawer(anchor, false)}>
          <Image
            height={30}
            width={30}
            src="/assets/cross-circle.svg"
            alt="cross icon"
            className=""
          />
        </div>
        <div className="flex items-center gap-[22px] px-[15px] max-[1023px]:mr-[0px] min-[1024px]:mr-10 py-2 rounded-xl p-1 lg:w-[464px] bg-[rgba(196,196,196,0.5)]">
          <Image
            height={30}
            width={30}
            src={"/assets/magnifying_glass.svg"}
            alt="magnifying-glass"
          />

          <input
            className="text-[20px] bg-[rgba(196,196,196,0.01)] focus:outline-none placeholder:text-[#FFF] placeholder:text-[20px] placeholder:font-normal w-full text-[#fff]"
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search for games..."
          />
        </div>
        <div className="absolute w-[90%]">
        {suggestions.length > 0 && (
          <ul className="block md:hidden z-10 w-full bg-white shadow-lg rounded-lg mt-24 lg:w-[92%]">
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
    </Box>
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const filteredGames = games.filter((game) => {
        return game.game_name.toLowerCase().includes(value.toLowerCase());
      });
      setSuggestions(filteredGames);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (game) => {
    router.push(`/${game.game_id}`);
    setQuery("");
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
    <div className="flex items-center justify-center  py-2 px-5 md:px-15 md:py-[30px] ">
      <div className="flex flex-row w-[100%] items-center justify-between">
        <div className="flex items-center justify-between max-[767px]:gap-2 min-[768px]:gap-6 min-[1024px]:gap-16">
          {size[0] > 768 ? (
            <button
              onClick={handleDrawer}
              className={`duration-100 ${drawerOpen ? "rotate-180" : ""} z-0`}
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
          <div className=" bg-slate-50 px-4 py-[6px] ">
            <Image
              height={100}
              width={100}
              className="self-center pt-1"
              src={"/assets/gamehub.png"}
              alt="header-console"
            />
          </div>
        </div>

        <div className="relative ">
          <div className="block md:hidden">
            {["top"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <Image
                    height={30}
                    width={30}
                    src={"/assets/magnifying_glass.svg"}
                    alt="magnifying-glass"
                    className="block md:hidden"
                  />
                </Button>{" "}
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  className="!z-[1010101000000]"
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-[22px] px-[15px] max-[1023px]:mr-[0px] min-[1024px]:mr-10 py-2 rounded-xl md:w-[300px] lg:w-[464px] md:bg-[rgba(196,196,196,0.5)]">
            <Image
              height={30}
              width={30}
              src={"/assets/magnifying_glass.svg"}
              alt="magnifying-glass"
            />

            <input
              className="text-[20px] bg-[rgba(196,196,196,0.01)] focus:outline-none placeholder:text-[#FFF] placeholder:text-[20px] placeholder:font-normal w-full text-[#fff]"
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search for games..."
            />
          </div>
          {suggestions.length > 0 && (
            <ul className="hidden md:block absolute z-10 w-full mr-10 bg-white shadow-lg rounded-lg mt-2 lg:w-[92%]">
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

function Example() {
  return (
    <>
      {["start", "end", "top", "bottom"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}