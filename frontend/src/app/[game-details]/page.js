import React from "react";
import GameDetails from "../../components/gameDetails";

const page = () => {
  return (
    <div className="px-4 lg:pl-10 lg:pr-16 py-6 w-[70%]" style={{ flex: 3 }}>
      <GameDetails />
    </div>
  );
};

export default page;
