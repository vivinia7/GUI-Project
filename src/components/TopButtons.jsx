import React from "react";
import { UilArrowRight } from '@iconscout/react-unicons'

function TopButtons({onClick}) {

  return (
    <div className="cursor-pointer text-white flex justify-end my-5 transition ease-in-out hover:scale-125">
      <button onClick={onClick}> Fun Fact</button>
      <UilArrowRight/>
    </div>

    
  )
}

export default TopButtons