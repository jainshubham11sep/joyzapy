"use client"
import React, { useState, useEffect } from "react";
import HorizontalComponent from "./HorizontalComponent";
import AppConstants from "../../constants/AppConstants"

const index = ({ gameCategories }) => {

  const [games, setGames] = useState([])

  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetch(`${AppConstants.baseURL}/game/all`);
      const data = await res.json();
      setGames(data);
    };

    fetchGames();
  }, []);

  return (
    <div className="bg-[#11101D] h-[68px] md:h-[108px] w-full z-50 justify-center items-center">
      <HorizontalComponent gameCategories={gameCategories} games={games} />
    </div>
  );
};

export default index;
