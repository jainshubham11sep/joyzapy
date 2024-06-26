import React from "react";
import CategoryGames from "@/components/common/CategoryGames";

const category = ({ params }) => {
  const { category } = params;
  console.log(category, "paramsparams");

  return (
    <div className="w-full">
      <CategoryGames category={category} />
    </div>
  );
};

export default category;
