"use client";
import React, { useEffect, useState } from "react";
import CustomDrawer from "../sidebar/DrawerMobile";
import Image from "next/image";
import { useDrawerContext } from "@/context/drawerContext";
import { useRouter } from "next/navigation";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CrossCircleImg from "../../../public/nextAssets/cross-circle.svg";

const HorizontalComponent = ({ gameCategories, games }) => {
  // const { drawerOpen, setDrawerOpen } = useDrawerContext();
  const [size, setSize] = useState([0]);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const [state, setState] = React.useState({
    top: false,
  });

  //toggle drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length >= 1) {
      const filteredGames = games?.filter((game) => {
        return game?.game_name?.toLowerCase().includes(value.toLowerCase());
      }).slice(0, 7);
      setSuggestions(filteredGames);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (game) => {
    router.push(`/${game?.game_name}`);
    setQuery("");
    setSuggestions([]);
  };

  // const handleDrawer = () => {
  //   setDrawerOpen(!drawerOpen);
  // };

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const list = (anchor) => (
    <Box sx={{ width: anchor === "top" }} role="presentation">
      <div className="flex flex-col gap-4 bg-[#11101D] p-4">
        {" "}
        <div
          className="w-full self-end flex cursor-pointer justify-end float-end"
          onClick={toggleDrawer(anchor, false)}
        >
          <Image
            height={30}
            width={30}
            src={CrossCircleImg}
            alt="cross icon"
            className=""
          />
        </div>
        <div className="flex items-center gap-[22px] px-[15px] max-[1023px]:mr-[0px] min-[1024px]:mr-10 py-0 rounded-xl lg:w-[464px] bg-[rgba(196,196,196,0.5)]">
          <Image
            height={30}
            width={30}
            src={"/nextAssets/magnifying_glass.svg"}
            alt="magnifying-glass"
          />
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Autocomplete
              id="combo-box-demo"
              className="!relative"
              disableClearable
              freeSolo
              options={
                suggestions?.map((game) => game?.game_name)
              }
              onChange={(event, value) => {
                const selectedGame = suggestions?.find(
                  (game) => game.game_name === value
                );
                if (selectedGame) {
                  handleSuggestionClick(selectedGame);
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="text-[20px] bg-[rgba(196,196,196,0.01)] !outline-none focus:outline-none !placeholder:text-[#FFF] placeholder:text-[20px] placeholder:font-normal w-full text-[#fff]"
                  type="text"
                  value={query}
                  onChange={handleSearchChange}
                  placeholder="Search for games..."
                  InputLabelProps={{
                    style: { color: "#FFFFFF", position: "relative" }
                  }}
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    style: {
                      border: "none",
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        display: "none",
                      },
                      "& .MuiAutocomplete-input": {
                        "::placeholder": {
                          color: "white",
                        },
                        color: "white",
                      },
                    },
                  }}
                />
              )}
              PopperComponent={(props) => (
                <div
                  onClick={toggleDrawer(anchor, false)}
                  {...props}
                  style={
                    {
                      position: "fixed",
                      width: "85%",
                      left: "7%",
                      top: "103px",
                    }
                  }
                >
                  {props?.children}
                </div>
              )}
            />
          </Stack>
        </div>
      </div>
    </Box>
  );

  return (
    <div className="flex items-center justify-center  py-2 px-5 md:px-15 md:py-[30px] ">
      <div className="flex flex-row w-[100%] items-center justify-between">
        <div className="flex items-center justify-between max-[767px]:gap-2 min-[768px]:gap-6 min-[1024px]:gap-16">
          {/* {size?.[0] > 768 ? (
            <button
              onClick={handleDrawer}
              className={`duration-100 ${drawerOpen ? "rotate-180" : ""} z-0`}
            >
              <Image
                height={30}
                width={30}
                src={"/nextAssets/menu.svg"}
                alt="burger"
              />
            </button>
          ) : (
            <CustomDrawer gameCategories={gameCategories} />
          )} */}
          <div className=" cursor-pointer lg:ml-[3rem]" onClick={() => router.push('/')}>
            <Image
              height={150}
              width={150}
              className="self-center pt-1"
              src={"/nextAssets/Full logo White.png"}
              alt="header-console"
            />
          </div>
        </div>

        <div className="relative ">
          <div className="block md:hidden">
            {["top"]?.map((anchor, id) => (
              <React.Fragment key={id.toString()}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <Image
                    height={30}
                    width={30}
                    src={"/nextAssets/magnifying_glass.svg"}
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
              src={"/nextAssets/magnifying_glass.svg"}
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
          {suggestions?.length > 0 && (
            <ul className="hidden md:block absolute z-10 w-full mr-10 bg-white shadow-lg rounded-lg mt-2 lg:w-[92%]">
              {suggestions?.map((game) => (
                <li
                  key={game?._id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(game)}
                >
                  {game?.game_name}
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