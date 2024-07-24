"use client"
import { useRouter } from "next/navigation";
import FeaturedGames from "./featuredGames";
import SportGame from "./sportsGame";
import Image from "next/image";


const imageData = [
  { image: "/nextAssets/relatedgames/1.png", name: "olx" },
  { image: "/nextAssets/relatedgames/2.png", name: "Store Manager" },
  { image: "/nextAssets/relatedgames/3.png", name: "Store Manager" },
  { image: "/nextAssets/relatedgames/4.png", name: "Stickman Destruction" },
  { image: "/nextAssets/relatedgames/1.png", name: "olx" },
  { image: "/nextAssets/relatedgames/2.png", name: "Store Manager" },
  { image: "/nextAssets/relatedgames/3.png", name: "Store Manager" },
  { image: "/nextAssets/relatedgames/4.png", name: "Stickman Destruction" },
];



function index({ gameData, featureGameData }) {
  const router = useRouter();
  console.log(gameData,
    "gameDatagameDatagameData"
  )

  return (
    <>
      <div
        className="bg-[#1F1F29] px-4 lg:px-16 py-6 w-[70%] "
        style={{ flex: 3 , marginRight:"auto" , marginLeft:"auto", maxWidth:"1444px"}}
      >
        <div>
          <div className="containerRight cursor-pointer" onClick={()=>router.push("/669a00abf2314c2bff08f842")}>
            <Image
              width={500}
              height={500}
              src={"/nextAssets/Frame 166.png"}
              alt="image"
              className="hidden min-[600px]:block w-full"
            />
            <Image
              width={500}
              height={500}
              src={"/nextAssets/Frame16Mob.png"}
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
