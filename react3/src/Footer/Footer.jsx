import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css"
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <footer>
            <div className="main-grid">
                <div>
                    <h2>
                        O.C Furniture
                    </h2>
                    <p>Thoughtful furniture for lived-in spaces.</p>
                </div>
                <div>
                    <h2> Quick Link  </h2>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/collections">Collections</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 >Follow Us </h2>
                    <ul className="sh2">
                        <li><FaFacebookF className="icon1"/><a href="#" aria-label="Facebook">Facebook</a></li>
                        <li><FaTwitter className="icon2"/><a href="#" aria-label="Twitter">Twitter</a></li>
                        <li><FaInstagram className="icon3"/><a href="#" aria-label="Instagram">Instagram</a></li>
                    </ul>
                </div>
            </div>
          

            <div className="deed">
                <p>© 2026 Furniture Studio O.C.— All rights reserved || Designed by Victory. </p>
            </div>
            </footer>
    )
}
export default Footer;
