"use client"
import { useRouter } from "next/navigation";
import FeaturedGames from "./featuredGames";
import Image from "next/image";

function index({ gameData }) {
  const router = useRouter();

  return (
    <>
      <div
        className="bg-[#1F1F29] px-4 lg:px-16 py-6 w-[70%] "
        style={{ flex: 3, marginRight: "auto", marginLeft: "auto", maxWidth: "1444px" }}
      >
        <div>
          <div className="containerRight cursor-pointer" onClick={() => router.push("https://www.joyzapy.com/pool-8-ball")}>
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
          <div className="flex flex-col mt-8 mb-4 lg:mb-16">
            <FeaturedGames title={"All Games"} gameData={gameData} />
            {/* {
              featureGameData ?
                (
                  <FeaturedGames title={"Featured Games"} gameData={featureGameData} />
                ) : (
                  ""
                )
            } */}
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
