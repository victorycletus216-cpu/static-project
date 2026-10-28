import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./About.css";

function About({ cartItems, onRemoveFromCart }) {
    return (
        <div>
            <Header cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />

            <main>
             
                <section className="about-hero">
                    <div className="about-hero-text">
                        <p className="eyebrow">Designed in Lagos. Made to stay.</p>
                        <h1>About OC Furniture</h1>
                        <p className="about-intro">
                            We make it easier to find furniture for the rooms you live in
                            every day. Considered pieces, honest materials and clear
                            information, so furnishing your space feels simple and the
                            result feels like you.
                        </p>
                    </div>

                    <div className="about-hero-image">
                        <img
                            src="Living_room.jpeg"
                            alt="Living room with a cream sectional sofa and marble coffee table"
                        />
                    </div>
                </section>

                
                <section className="about-story">
                    <div className="about-story-image">
                        <img
                            src="dining.jpg"
                            alt="Dining table with cushioned chairs beside a large window"
                        />
                    </div>

                    <div className="about-story-text">
                        <p className="eyebrow">Our Story</p>
                        <h2>Made for real homes and real life.</h2>
                        <p>
                            OC Furniture began with a simple belief: the pieces we live
                            with should become more meaningful over time. We make
                            furniture for real homes, real rituals and all the beautiful
                            mess in between.
                        </p>
                        <p>
                            Working with considered materials and skilled makers, we
                            favour ease over excess, detail over decoration, and a calm
                            sense of permanence.
                        </p>
                        <p>
                            Our purpose is simple: to help you find furniture that suits
                            your home, your space and the way you live in it.
                        </p>
                    </div>
                </section>

           
                <section className="about-mission">
                    <div className="about-mission-card">
                        <p className="eyebrow">Our Mission</p>
                        <h2>Furnishing your space, on your terms.</h2>
                        <p className="about-mission-text">
                            We want to help you furnish your space with furniture that
                            suits your needs, your preferences and your budget. Whether
                            you are finishing a first apartment, refreshing a family room
                            or starting with one empty bedroom, choosing the right pieces
                            should feel clear and comfortable, from the first look to the
                            final decision.
                        </p>
                    </div>
                </section>

              
                <section className="about-why">
                    <p className="eyebrow">Why Choose OC Furniture</p>
                    <h2>What we aim to offer.</h2>

                    <div className="why-grid">
                        <article className="why-card">
                            <h3>Thoughtfully selected furniture</h3>
                            <p>
                                Every piece is chosen with care for quality, comfort and
                                lasting style.
                            </p>
                        </article>

                        <article className="why-card">
                            <h3>Styles for different spaces</h3>
                            <p>
                                From compact apartments to open living rooms, there is
                                something to suit the way you live.
                            </p>
                        </article>

                        <article className="why-card">
                            <h3>Clear product information</h3>
                            <p>
                                Straightforward names, prices and details, so you always
                                know what you are looking at.
                            </p>
                        </article>

                        <article className="why-card">
                            <h3>Customer-focused service</h3>
                            <p>
                                We are here to help you find the right piece and answer
                                your questions along the way.
                            </p>
                        </article>
                    </div>
                </section>

                
                <section className="about-cta">
                    <p className="eyebrow">Get Started</p>
                    <h2>Ready to furnish your space?</h2>
                    <p>
                        Browse the collection, or get in touch if you would like a hand
                        choosing the right pieces for your home.
                    </p>

                    <div className="about-cta-buttons">
                        <Link to="/collections" className="btn">Shop Collections</Link>
                        <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
export default About;
