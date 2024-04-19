import React from 'react';
import CartCard from '../Components/Cart/CartCard'
import Header from '../Components/Header/Header';
const Carts = () => {
  return (
    <div className="cartvideos">
      <Header />
      <h3 className="heading ml-8 mt-3 text-blue-500 text-lg">Cart's</h3>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4">

        {/* Cart Cards  */}
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
  

        
      </div>
    </div>
  )
}

export default Carts
