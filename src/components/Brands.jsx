import Reveal from "./Reveal.jsx";
import { BRANDS } from "../data/brands.js";

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}

export default function Brands() {
  return (
    <section id="brands" className="section-pad">
      <div className="wrap">

        <Reveal className="section-head">
          <span className="eyebrow">Brands We Sell</span>
          <h2>Genuine material, trusted mills</h2>
          <p>
            We stock and deal in India's leading steel brands.
          </p>
        </Reveal>

        <div className="brand-grid">
          {BRANDS.map((b) => (
            <div className="brand-badge reveal in" key={b.name}>
              
              <div className="mark">
                <img src={b.image} alt={b.name} />
              </div>

              <b>{b.name}</b>
            </div>
          ))}
        </div>

        <p className="brand-note">
          Brand names are the property of their respective owners and are
          listed to indicate the products we deal in.
        </p>

      </div>
    </section>
  );
}