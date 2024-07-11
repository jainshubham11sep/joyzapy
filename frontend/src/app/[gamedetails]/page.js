import React from "react";
import GameDetails from "../../components/gameDetails";
import { notFound } from "next/navigation";

const fetchGameDetails = async (req) => {
  try {
    const gameId = await req;
    console.log(gameId, "gameId");
    const data = await fetch("http://localhost:3000/api/game/gamedetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameId),
    });
    if(!data.ok){
      return data.ok;
    }
    const jsonData = await data.json();
    console.log(jsonData, "game dataa");
    return jsonData;
  } catch (error) {
    console.log(error, "eror in fetching game data");
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
const fetchRelatedGames = async (req) => {
  try {
    const cat_arr = await req;
    console.log(cat_arr, "cat_arrrrr");
    const data = await fetch("http://localhost:3000/api/game/relatedgames", {
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
    gameId: params.gamedetails,
  });
  console.log(data,"game details")

  if(!data){
    notFound();
  }

  const featureGameData = await fetchFeaturedGames();

  const relatedgames = await fetchRelatedGames({
    cat_arr: data?.cat_arr,
  });
  console.log(relatedgames, "relatedgamesrelatedgames")


  return (
    <div className="px-4 lg:pl-10 lg:pr-16 py-6 w-[70%]" style={{ flex: 3 }}>
      <GameDetails data={data} featureGameData={featureGameData} relatedgames={relatedgames} />
    </div>
  );
};

export default page;
