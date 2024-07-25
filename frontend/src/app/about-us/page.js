import React from "react";
import AboutUs from "../../components/aboutUs";
export const metadata = {
  title: 'About us',
  description: 'About us',
}


const page = () => {
  return (
    <div className="bg-[#1F1F29] px-4 lg:px-16 py-6 w-[100%] ">
      <AboutUs />
    </div>
  );
};

//
export default page;
