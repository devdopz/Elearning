import React from 'react'

const CartButton = () => {
    function ViewCart(){
        alert("Go to cart's Page")
    }
    return (
        <button onClick={ViewCart} id="cartBtn" className=" bg-orange-500 text-white px-2 p-1 rounded-md">
            Add to cart
        </button>
    )
}

export default CartButton
