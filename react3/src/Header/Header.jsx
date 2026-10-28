 import { useState } from "react";
 import Logo from "../Header/Logo";
import Cart from "../Header/Cart";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header({ cartItems, onRemoveFromCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* header section start */}
      <section>
        <header className="header">

          <Logo />

          <nav className={isMenuOpen ? "navbar active" : "navbar"}>
            <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/collections" onClick={() => setIsMenuOpen(false)}>Collections</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>

          <div className="nav-actions">
            <button
              className="menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
            </button>

            <Cart items={cartItems} onRemove={onRemoveFromCart} />
          </div>

        </header>
      </section>
      {/* header section end */}
    </div>
  );
}
export default Header;
