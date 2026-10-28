import "./Cart.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from "./ShoppingCart";


function Cart({ items, onRemove }) {
  const [showBasket, setShowBasket] = useState(false)


  const checkout = () => {
    alert("Thank you for your order! This is a demo store, so no payment was taken.")
  }

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="cart">
      <button
        className="shop-basket"
        onClick={() => setShowBasket(!showBasket)}
        aria-label={`Open shopping cart, ${itemCount} items`}
        aria-expanded={showBasket}
      >
        <FontAwesomeIcon icon={faShoppingBasket} />
        {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
      </button>

      {/* Show cart when shopping basket is clicked */}
      {showBasket && (
        <ShoppingCart
          items={items}
          onRemove={onRemove}
          onCheckout={checkout}
        />
      )}
    </div>
  );
}

export default Cart;
