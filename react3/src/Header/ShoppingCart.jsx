import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ShoppingCart({ items, onRemove, onCheckout }){
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return(
        <div className="shopping-cart">
            {items.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                items.map((item) => (
                    <div className="box" key={item.id}>
                        <div className="content">
                            <h3>{item.name}</h3>
                            <span className="price">₦{item.price.toLocaleString()}</span>
                            <span className="quantity">qty : {item.quantity} </span>
                        </div>
                        <button
                            className="trash-btn"
                            onClick={() => onRemove(item.id)}
                            aria-label={`Remove ${item.name}`}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                ))
            )}

            <div className="total">total : ₦{total.toLocaleString()}/-</div>
            <button
                className="btn checkout-btn"
                onClick={onCheckout}
                disabled={items.length === 0}
            >
                checkout
            </button>
        </div>
    )
}
export default ShoppingCart;
