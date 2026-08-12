import Icon from "./Icon.jsx";
import config from "../config.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-col footer-about">
          <div className="footer-brand">
            <span><img src={"Koiya Store Logo.jpeg"} alt={config.businessName} style={{ width: "100px", height: "auto" }} /></span>
            <span style={{ color: "#fff", fontFamily: "var(--display)", fontSize: "1.05rem" }}>{config.businessName}</span>
          </div>
          <p>Quality steel at competitive prices — serving Nagercoil &amp; Kanyakumari District for over 20 years.</p>
          <div className="footer-social">
            <a href={`https://wa.me/${config.whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Icon name="whatsapp" size={17} />
            </a>
            <a href={`tel:${config.phoneHref}`} aria-label="Call">
              <Icon name="phone" size={17} />
            </a>
            <a href={`mailto:${config.email}`} aria-label="Email">
              <Icon name="mail" size={17} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#brands">Brands</a></li>
            <li><a href="#quote">Get Quote</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Products</h5>
          <ul>
             <li><a href="#products">Steel Racks</a></li>
            <li><a href="#products">Angles</a></li>
            <li><a href="#products">Binding Wire</a></li>
            <li><a href="#products">Fencing Net</a></li>
            <li><a href="#products">Barbed Wire</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li>{config.address}</li>
            <li><a href={`tel:${config.phoneHref}`}>{config.phoneDisplay}</a></li>
            <li><a href={`mailto:${config.email}`}>{config.email}</a></li>
            <li>{config.hours[0].day}: {config.hours[0].time}</li>
            <li><p>Friday - Closed</p></li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>&copy; {year} {config.businessName}. All rights reserved.</span>
        <span>Nagercoil &bull; Kanyakumari District &bull; Tamil Nadu</span>
      </div>
    </footer>
  );
}
