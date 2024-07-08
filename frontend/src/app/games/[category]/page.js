import React from "react";
import CategoryGames from "@/components/common/CategoryGames";

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


const category = async({ params }) => {
  const { category } = params;
  console.log(category, "paramsparams");

  const featureGameData = await fetchFeaturedGames();
  const gameData = await fetchAllGames();

  return (
    <div className="w-full">
      <CategoryGames category={category} allGameData={gameData} featureGameData={featureGameData}/>
    </div>
  );
};

export default category;
