import React from 'react'
import ReactStars from "react-stars";
import CartButton from '../CartButton';
const LatestCard = () => {
  return (
    <div className="p-2 border border-[#606060] max-w-sm rounded-lg space-y-2.5">
    <img src="/1.png" alt="product" className="rounded-md w-full" />
    <div className="px-2 space-y-2">
      <h4 className="font-medium">
        10 Days of code : The Complete Python Pro Bootcamp
      </h4>
      <p className="text-[#888888]">Mentor : Fathima shamly</p>
      <CartButton/>
      <span className="flex items-center space-x-2">
        <h6 className="font-medium">4.7</h6>
        <ReactStars value={5} edit={false} size={18} half={true} />
      </span>
    </div>
  </div>
  )
}

export default LatestCard
