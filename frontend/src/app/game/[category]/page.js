import React from "react";
import CategoryGames from "@/components/common/CategoryGames";
import { notFound } from "next/navigation";
import AppConstants from "../../../constants/AppConstants"

const fetchAllGames = async () => {
  try {
    const data = await fetch(`${AppConstants.baseURL}/game/all`,{
      method: "POST"});
    const game = await data.json();
    return game;
  } catch (error) {
    console.log(error.message, "game error");
  }
};

const fetchFeaturedGames = async () => {
  try {
    const response = await fetch(`${AppConstants.baseURL}/game/featuredgames`,{
      method: "POST"});

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const game = await response.json();

    if (!game || game.length === 0) {
      throw new Error("No featured games data found");
    }

    return game;
  } catch (error) {
    console.log(error.message, "game error");
  }
};




const category = async ({ params }) => {
  const { category } = params;
  const arr = ["all", "featured", "action", "adventure", "thriller"];
  if (!arr.includes(category)) {
    notFound()
  }
  let gameData;

  const featureGameData = await fetchFeaturedGames();
  if (category === "adventure" || category === "action" || category === "thriller") {
    const categoryIdMap = {
      adventure: "66987d17dec4bed4fb6bf8e0",
      action: "66965fc66845f70cb600d44c",
      thriller: "6698a1ea673e42caf98382ce",
    };

    const categoryId = categoryIdMap[category];

    gameData = await fetch(`${AppConstants.baseURL}/categories/category_games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ categoryId }),
    }).then(response => response.json());
  } else {
    gameData = await fetchAllGames();
  }


  // console.log(featureGameData, "featureGameDatafeatureGameData")
  // console.log(gameData, "allgameee")
  return (
    <div className="w-full">
      <CategoryGames category={category} allGameData={gameData} featureGameData={featureGameData} />
    </div>
  );
};

export default category;
