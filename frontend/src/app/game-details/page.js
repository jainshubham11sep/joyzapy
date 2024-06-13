import React from "react";
import GameDetails from "../../components/gameDetails";

const page = () => {
  return (
    <div className="px-4 lg:px-10 py-6 w-[85%]" style={{ flex: 3 }}>
      <GameDetails />
    </div>
  );
};

export default page;
