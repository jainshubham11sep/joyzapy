"use client";
import GameCard from "./GameCard";
import styles from "./game.module.css";
// import { useRouter } from "next/navigation";

const imageData = [
  { image: "/nextAssets/relatedgames/1.png", name: "olx" },
  { image: "/nextAssets/relatedgames/2.png", name: "Store Manager" },
  { image: "/nextAssets/relatedgames/3.png", name: "Store Manager" },
  { image: "/nextAssets/relatedgames/4.png", name: "Stickman Destruction" },
  { image: "/nextAssets/relatedgames/1.png", name: "olx" },
  { image: "/nextAssets/relatedgames/2.png", name: "Store Manager" },
  { image: "/nextAssets/relatedgames/3.png", name: "Store Manager" },
  { image: "/nextAssets/relatedgames/4.png", name: "Stickman Destruction" },
  { image: "/nextAssets/relatedgames/1.png", name: "olx" },
  { image: "/nextAssets/relatedgames/2.png", name: "Store Manager" },
  { image: "/nextAssets/relatedgames/3.png", name: "Store Manager" },
  { image: "/nextAssets/relatedgames/4.png", name: "Stickman Destruction" },
];

const CategoryGames = ({ category, allGameData, featureGameData }) => {
  // const router = useRouter()

  return (
    <div className="flex flex-col gap-[64px] px-[20px] md:px-[40px] py-[24px] max-w-[1444px] m-auto max-[700px]:gap-9 w-full">
      <div
        className={`h-[152px] ${styles.background} bg-cover bg-no-repeat rounded-[20px] flex justify-center items-center  `}
      >
        <div className="flex flex-col justify-center items-center   ">
          <p className="text-[35px] font-bold  px-[2px] md:text-[40px] leading-[48px] text-[#333333] text-center capitalize">
            {category} Games
          </p>
        </div>
      </div>
      <div className="grid-container-game justify-items-center">
        {category === "featured"
          ? featureGameData
              ?.filter((data) => data?.game_id)
              ?.map((data) => <GameCard data={data}  />)
          : allGameData?.map((data) => (
              <GameCard data={data} />
            ))}
      </div>
    </div>
  );
};
export default CategoryGames;
