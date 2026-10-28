import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import products from "./products";
import "./Collections.css";

function Collections({ cartItems, onAddToCart, onRemoveFromCart }) {
    return (
        <div>
            <Header cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />

            <main>
                <section className="collections">
                    <p className="eyebrow">SHOP OUR EDIT</p>
                    <h2>Pieces for real homes.</h2>
                    <p className="collections-intro">
                        Six considered pieces, chosen for everyday living. Add anything
                        straight to your cart.
                    </p>

                    <div className="products-grid">
                        {products.map((product) => (
                            <article className="product-card" key={product.id}>
                                <div className="product-image-wrap">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-image"
                                    />
                                </div>

                                <div className="product-details">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-price">
                                        ₦{product.price.toLocaleString()}
                                    </p>
                                    <button
                                        className="btn product-btn"
                                        onClick={() => onAddToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
export default Collections;
