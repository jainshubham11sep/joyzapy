import React from "react";
import CategoryGames from "@/components/common/CategoryGames";
import { notFound } from "next/navigation";
import AppConstants from "../../../constants/AppConstants"

export async function generateMetadata({ params, searchParams }, parent) {
  const { category } = params

  return {
    title: `${category} games`,
  }
}


// const fetchFeaturedGames = async () => {
//   try {
//     const response = await fetch(`${AppConstants.baseURL}/game/featuredgames`, {
//       method: "POST"
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const game = await response.json();

//     if (!game || game.length === 0) {
//       throw new Error("No featured games data found");
//     }

//     return game;
//   } catch (error) {
//     console.log(error.message, "game error");
//   }
// };


// const fetchGameCategories = async () => {
//   try {
//     const response = await fetch(`${AppConstants.baseURL}/categories/all`, { next: { revalidate: 60 } });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const categories = await response.json();
//     return categories;
//   } catch (error) {
//     console.log(error.message, "categories error");
//   }
// };



const fetchCategories_games = async (category) => {
  try {
    let response = await fetch(`${AppConstants.baseURL}/categories/category_games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cat_name: category }),
    })
    const game = await response.json();
    if (!game || game.length === 0) {
      throw new Error("No featured games data found");
    }

    return game;
  } catch (error) {
    console.log(error.message, "game error");
  }
}

const page = async ({ params }) => {
  const { category } = params;
  const decodedCategory = decodeURIComponent(category);

  const gameData = await fetchCategories_games(decodedCategory);

  if (gameData?.error) {
    notFound();
  }

  return (
    <div className="w-full">
      <CategoryGames category={decodedCategory} allGameData={gameData} />
    </div>
  );
};

export default page;
