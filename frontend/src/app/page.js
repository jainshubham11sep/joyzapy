import Image from "next/image";
import Home from "../components/home";
import Navbar from "../components/navbar/index.js";
import AppConstants from "../constants/AppConstants"

// import  { Metadata } from 'next'
 
export const metadata = {
  title: 'PunoGames',
  description: 'PunoGames',
}

// export const dynamic  = 'force-dynamic' // Custom flag for dynamic behavior
export const revalidate = 0;

const fetchAllGames = async () => {
  try {
    const response = await fetch(`${AppConstants.baseURL}/game/all`,{
      method: "POST"});

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const games = await response.json();

    if (!Array.isArray(games) || games.length === 0) {
      throw new Error("No games data found");
    }

    return games;
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


export default async function HomePage() {
 
  const gameData = await fetchAllGames();
  const featureGameData = await fetchFeaturedGames();
  return (
    <>
      <Home gameData={gameData} featureGameData={featureGameData} />
    </>
  );
}
