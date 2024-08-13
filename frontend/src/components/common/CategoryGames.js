"use client";
import GameCard from "./GameCard";
import styles from "./game.module.css";
// import { useRouter } from "next/navigation";



const CategoryGames = ({ category, allGameData }) => {
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
        {
          allGameData?.map((data) => (
            <GameCard data={data} />
          ))
        }
      </div>
    </div>
  );
};
export default CategoryGames;
