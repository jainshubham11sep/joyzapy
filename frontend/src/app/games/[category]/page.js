import React from 'react'
import CategoryGames from "@/components/common/CategoryGames"

const category = ({params}) => {
  const {category} = params
  console.log(category,"paramsparams")

  return (
    <div>
      
      <CategoryGames category={category} />
    </div>
  )
}

export default category
