import React from "react";
import GameDetails from "../../components/gameDetails";
import { notFound } from "next/navigation";
import AppConstants from "../../constants/AppConstants"



export async function generateMetadata({ params, searchParams }, parent) {
  const { gamedetails } = params;
  const data = await fetchGameDetails({
    game_name: gamedetails,
  });
  return {
    title: data?.meta_title ? data.meta_title : gamedetails,
    description: data?.meta_description ? data.meta_description : gamedetails,
  }
}

const fetchGameDetails = async (req) => {
  try {
    const game_name = await req;
    // console.log(game_name, "game_name");
    const data = await fetch(`${AppConstants.baseURL}/game/gamedetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game_name),
    });
    if (!data.ok) {
      return data.ok;
    }
    const jsonData = await data.json();
    // console.log(jsonData, "game dataa");
    return jsonData;
  } catch (error) {
    console.log(error, "eror in fetching game data");
  }
};

// const fetchFeaturedGames = async () => {
//   try {
//     const response = await fetch(`${AppConstants.baseURL}/game/featuredgames`,{
//       method: "POST"});

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
const fetchRelatedGames = async (req) => {
  try {
    const cat_arr = await req;
    // console.log(cat_arr, "cat_arrrrr");
    const data = await fetch(`${AppConstants.baseURL}/game/relatedgames`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cat_arr),
    });

    const jsonData = await data.json();
    // console.log(jsonData, "game dataa");
    return jsonData;
  } catch (error) {
    console.log(error, "eror in fetching game data");
  }
};

const page = async ({ params }) => {

  const data = await fetchGameDetails({
    game_name: params.gamedetails,
  });
  // console.log(data,"game details")

  if (!data) {
    notFound();
  }

  // const featureGameData = await fetchFeaturedGames();

  const relatedgames = await fetchRelatedGames({
    cat_arr: data?.cat_arr,
  });



  return (
    <div className="px-4 lg:pl-10 lg:pr-16 py-6 w-[70%]" style={{ flex: 3, marginRight: "auto", marginLeft: "auto", maxWidth: "1444px" }}>
      <GameDetails data={data} relatedgames={relatedgames} />
    </div>
  );
};

export default page;
