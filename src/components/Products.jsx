import { useState } from "react";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import { CATEGORIES, CAT_LABEL, PRODUCTS } from "../data/products.js";

export default function Products({ onRequestQuote }) {
  const [filter, setFilter] = useState("all");
  const visible = PRODUCTS.filter((p) => filter === "all" || p.cat === filter);

  return (
    <section id="products" className="section-pad">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Products</span>
          <h2>Everything for the job site</h2>
          <p>Browse by category — tap a tab to filter, or scroll through everything we stock.</p>
        </Reveal>

        <div className="cat-tabs" role="tablist">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={`cat-tab ${filter === c.id ? "active" : ""}`}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {visible.map((p) => (
            <div className="product-card reveal in" key={p.name}>
              <div className="pic">
                <span className="cat-chip">{CAT_LABEL[p.cat]}</span>
                <img src={p.image} alt={p.name} className="product-image" />
              </div>
              <div className="body">
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
                <a className="qbtn" href="#quote" onClick={() => onRequestQuote(p.name)}>
                  <Icon name="quote" size={15} />
                  Request Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
