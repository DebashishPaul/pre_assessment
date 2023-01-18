import React from 'react'
import Loading from "../assets/loader.gif"

const Loader = () => {
  return (
    <div>
      <img src={Loading} alt="Loading" className="w-20" />
    </div>
  )
}

export default Loader
