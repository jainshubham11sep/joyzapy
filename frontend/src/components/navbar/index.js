import React from "react";
import HorizontalComponent from "./HorizontalComponent";
// import VerticalComponent from './VerticalComponent'

const index = () => {
  return (
    <div className="bg-[#11101D]  md:h-[108ypx] w-full z-50 justify-center items-center">
      {/* <VerticalComponent /> */}
      <HorizontalComponent />
    </div>
  );
};

export default index;
