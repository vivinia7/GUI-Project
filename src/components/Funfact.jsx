import React from 'react'

function Funfact() {
  return (
    <div>
    <div className="flex items-center justify-center py-6 text-xl text-white">
      <p>Fun Fact</p>
    </div>

    <div className="flex flex-row items-center justify-between text-white py-3">
      <div className="flex flex-col space-y-2">
        <div className="flex font-light text-sm items-center justify-center">
        There is a wide misconception that the Great Wall was built under the order of 
        Emperor Qin Shi Huang (259 - 210BC), but it is not true. The fact is that the 
        initial construction was 2,700 years ago during the Spring and Autumn Period 
        (770 - 276BC). The fortifications built by Chu State during the 7th century BC 
        have been proven to be the earliest Great Wall. The last construction was in 1878 
        in the late Qing Dynasty.
        
        The Great Wall of China became a UNESCO World Heritage Site in December 1987. 
        The wall is the longest man made structure in the world, with a total length of about 13170.7 mi 
        or 21196.18 km. Made over the course of hundreds of years, the wall was built by over 6 different 
        Chinese dynasties, and is over 2,300 years old
        </div>
      </div>
    </div>

  </div>
  )
}

export default Funfact