import React from 'react'

function Funfact({message}) {
  return (
    <div>
    <div className="flex items-center justify-center py-6 text-xl text-white">
      <p>Fun Fact</p>
    </div>

    <div className="flex flex-row items-center justify-between text-white py-3">
      <div className="flex flex-col space-y-2">
        <div className="flex font-light text-sm items-center justify-center">
        {message}
        </div>
      </div>
    </div>

  </div>
  )
}

export default Funfact
