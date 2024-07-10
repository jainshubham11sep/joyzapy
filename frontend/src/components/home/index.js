"use client"
import FeaturedGames from "./featuredGames";
import SportGame from "./sportsGame";
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

const sportGameData = [
  { image: "/assets/sportsgames/1.png", name: "Smash karts" },
  { image: "/assets/sportsgames/2.png", name: "Smash karts" },
  { image: "/assets/sportsgames/3.png", name: "Smash karts" },
  { image: "/assets/sportsgames/4.png", name: "Smash karts" },
  { image: "/assets/sportsgames/5.png", name: "Smash karts" },
  { image: "/assets/sportsgames/6.png", name: "Smash karts" },
];

function index({ gameData, featureGameData }) {

  console.log(featureGameData, "featureGameDatafeatureGameData")

  return (
    <>
      <div
        className="bg-[#1F1F29] px-4 lg:px-16 py-6 w-[70%] "
        style={{ flex: 3 , marginRight:"auto" , marginLeft:"auto", maxWidth:"1444px"}}
      >
        <div>
          <div className="containerRight">
            <Image
              width={500}
              height={500}
              src={"/assets/Frame 166.png"}
              alt="image"
              className="hidden min-[600px]:block w-full"
            />
            <Image
              width={500}
              height={500}
              src={"/assets/Frame16Mob.png"}
              alt="image"
              className="hidden max-[600px]:block w-full"
            />
          </div>
          <div className="flex flex-col mt-16 mb-4 lg:mb-16">
            <FeaturedGames title={"All Games"} imageData={imageData} gameData={gameData} />

            {/* <SportGame title={"Sports Games"} data={sportGameData} /> */}

            <FeaturedGames title={"Featured Games"} imageData={imageData} gameData={featureGameData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
