import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./Home.css"


function Home ({ cartItems, onRemoveFromCart }){
  return(
    <div>
      <Header cartItems={cartItems} onRemoveFromCart={onRemoveFromCart}/>
      <main>

        {/* hero section */}
        <section className="home">
          <div className="content">
            <p className="hero-label">Made for Living Well</p>
            <h1>Objects for <span>the way</span> you live.</h1>
            <p className="hero-text">Thoughtful furniture, tactile materials and enduring forms for rooms that feel unmistakably yours.</p>

            <div className="hero-buttons">
              <Link to="/collections" className="btn">Explore Collections</Link>
              <Link to="/about" className="btn btn-outline">Our Story</Link>
            </div>
          </div>
        </section>

        {/* philosophy section */}
        <section className="container">
          <div className="content2">
            <p className="eyebrow">OC PHILOSOPHY</p>
            <h2>A softer kind of modern.</h2>
            <p className="lead">OC Furniture brings quiet confidence to everyday spaces. Our edit pairs honest textures with sculptural silhouettes, giving every room warmth, ease and a point of view.</p>
          </div>
        </section>

        {/* room categories section */}
        <section className="box-container">
          <p className="eyebrow">SHOP FOR ROOM</p>
          <h2>Begin with a feeling</h2>

          <div className="row">
            <div className="content-box">
              <img src="living3.jpg" alt="Living room" className="image"/>
              <div className="box-text">
                <h3>Living Room</h3>
                <p>Low lounging, beautiful materials, everyday comfort</p>
              </div>
            </div>

            <div className="content-box">
              <img src="dining.jpg" alt="Dining room" className="image"/>
              <div className="box-text">
                <h3>Dining Room</h3>
                <p>Low lounging, beautiful materials, everyday comfort</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer/>
    </div>
  )
}
export default Home;
