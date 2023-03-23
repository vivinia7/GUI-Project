import React from "react";
import { UilArrowRight } from '@iconscout/react-unicons'

function FactButtons({onClick}) {
  {/* The function to enable the onClick event */}
  return (
    <div className="cursor-pointer text-white flex justify-end my-5 transition ease-in-out hover:scale-125">
      <button onClick={onClick} className="transition-all delay-75 ease-in-out"> Fun Fact</button>
      <UilArrowRight/>
    </div>

    
  )
}

export default FactButtons
