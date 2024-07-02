import Image from "next/image";
import Home from "../components/home"
import Navbar from "../components/navbar/index.js"

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
export default async function HomePage() {
  const gameData = await fetchAllGames();
  const featureGameData = await fetchFeaturedGames();
  return (
    <>
      <Home gameData={gameData} featureGameData={featureGameData} />
    </>
  );
}
