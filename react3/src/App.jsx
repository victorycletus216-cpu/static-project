import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home/Home.jsx";
import About from './About/About.jsx';
import Collections from './Collections/Collections.jsx';
import Contact from './Contact/Contact.jsx';


function App (){
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id)

    if (alreadyInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId))
  }

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} onAddToCart={addToCart} onRemoveFromCart={removeFromCart}/>}/>
        <Route path="/home" element={<Home cartItems={cartItems} onAddToCart={addToCart} onRemoveFromCart={removeFromCart}/>}/>
        <Route path="/about" element={<About cartItems={cartItems} onAddToCart={addToCart} onRemoveFromCart={removeFromCart}/>}/>
        <Route path="/collections" element={<Collections cartItems={cartItems} onAddToCart={addToCart} onRemoveFromCart={removeFromCart}/>}/>
        <Route path="/contact" element={<Contact cartItems={cartItems} onAddToCart={addToCart} onRemoveFromCart={removeFromCart}/>}/>
      </Routes>
    </Router>
  )
}
export default App;
