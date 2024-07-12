import React from "react";
import CategoryGames from "@/components/common/CategoryGames";
import { notFound } from "next/navigation";

const fetchAllGames = async () => {
  try {
    const data = await fetch("http://localhost:3000/api/game/all");
    const game = await data.json();
    return game;
  } catch (error) {
    console.log(error.message, "game error");
  }
};

const fetchFeaturedGames = async () => {
  try {
    const data = await fetch("http://localhost:3000/api/game/featuredgames");
    const game = await data.json();
    return game;
  } catch (error) {
    console.log(error.message, "game error");
  }
};



const category = async ({ params }) => {
  const { category } = params;
  const arr = ["All", "Featured"];
  if (!arr.includes(category)) {
    notFound()
  }

  const featureGameData = await fetchFeaturedGames();
  const gameData = await fetchAllGames();

  // console.log(featureGameData, "featureGameDatafeatureGameData")
  // console.log(gameData, "allgameee")
  return (
    <div className="w-full">
      <CategoryGames category={category} allGameData={gameData} featureGameData={featureGameData} />
    </div>
  );
};

export default category;
