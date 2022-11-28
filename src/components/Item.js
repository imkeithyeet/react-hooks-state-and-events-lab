import React, { useState } from "react";

function Item({ name, category }) {
  const[isInCart,setIsInCart] = useState(false)

  function handleAddToCartClick() {
    setIsInCart((isInCart)=>!isInCart)
  }
  
  // const addToCart =isInCart ? "add" : "remove"
  
  return (
    <li  className={isInCart ? "add" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className={isInCart ? "add": "remove"}
      onClick={handleAddToCartClick}
      >
        {isInCart ? "addToCart ": "removeFromCart"}
      </button>
    </li>
  );
}

export default Item;
