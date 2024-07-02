import React from "react";
import HorizontalComponent from "./HorizontalComponent";

const index = ({ gameCategories }) => {
  return (
    <div className="bg-[#11101D] h-[68px] md:h-[108px] w-full z-50 justify-center items-center">
      {/* <VerticalComponent /> */}
      <HorizontalComponent gameCategories={gameCategories} />
    </div>
  );
};

export default index;
