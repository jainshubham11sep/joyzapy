"use client"
import GameCard from "./GameCard";
import styles from "./game.module.css";
import { useRouter } from "next/navigation";

const data = [
  { image: "/assets/relatedgames/1.png", name: "olx" },
  { image: "/assets/relatedgames/2.png", name: "Store Manager" },
  { image: "/assets/relatedgames/3.png", name: "Store Manager" },
  { image: "/assets/relatedgames/4.png", name: "Stickman Destruction" },
  { image: "/assets/relatedgames/1.png", name: "olx" },
  { image: "/assets/relatedgames/2.png", name: "Store Manager" },
  { image: "/assets/relatedgames/3.png", name: "Store Manager" },
  { image: "/assets/relatedgames/4.png", name: "Stickman Destruction" },
  { image: "/assets/relatedgames/1.png", name: "olx" },
  { image: "/assets/relatedgames/2.png", name: "Store Manager" },
  { image: "/assets/relatedgames/3.png", name: "Store Manager" },
  { image: "/assets/relatedgames/4.png", name: "Stickman Destruction" },
];

const CategoryGames = ({ category }) => {
const router = useRouter()

  return (
    <div className="flex flex-col gap-[64px] px-[40px] py-[24px] max-w-[1444px] m-auto max-[700px]:gap-9 w-full">
      {/* <div class="text-[18px] font-semibold text-[#FEFEFE]">
        Home/<span class="text-[#15AEE3]">Privacy Policy</span>
      </div> */}

      <div
        className={`h-[152px] ${styles.background} bg-cover bg-no-repeat rounded-[20px] flex justify-center items-center  `}
      >
        <div className="flex flex-col justify-center items-center   ">
          <p className="text-[35px] font-bold  px-[2px] md:text-[40px] leading-[48px] text-[#333333] text-center ">
            {category} Games
          </p>
        </div>
      </div>

      <div className="grid-container-game justify-items-center">
        {data.map((data) => {
          return <GameCard data={data} />;
        })}
      </div>
    </div>
  );
};
export default CategoryGames;
