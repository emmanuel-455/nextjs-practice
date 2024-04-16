'use client'
import { useState } from "react";

function Addtocart() {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    
    setAddedToCart(true);
  };

  return (
    <div>
      <button onClick={handleAddToCart}>
        {addedToCart ? 'Added to Cart' : 'Add to cart'}
      </button>
    </div>
  )
}

export default Addtocart
