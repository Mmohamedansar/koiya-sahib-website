import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import { PRODUCTS } from "../data/products.js";
import { openWhatsApp } from "../utils/whatsapp.js";
import { useToast } from "./ToastContext.jsx";

const PRODUCT_NAMES = [...new Set(PRODUCTS.map((p) => p.name))];

const POINTS = [
  "Fill the short form — takes under a minute",
  "Your request is sent straight to us on WhatsApp",
  "We reply with today's rate and delivery timing",
];

export default function Quote({ prefill }) {
  const showToast = useToast();
  const [form, setForm] = useState({ name: "", mobile: "", product: "", qty: "", location: "" });

  useEffect(() => {
    if (prefill) setForm((f) => ({ ...f, product: prefill }));
  }, [prefill]);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi, I'd like a price quote.\n\nName: ${form.name}\nMobile: ${form.mobile}\nProduct: ${form.product}\nQuantity: ${form.qty}\nDelivery Location: ${form.location}`;
    showToast("Opening WhatsApp with your quote request…");
    openWhatsApp(msg);
    setForm({ name: "", mobile: "", product: "", qty: "", location: "" });
  };

  return (
    <section id="quote" className="section-pad">
      <div className="wrap quote-wrap">
        <Reveal>
          <span className="eyebrow" style={{ color: "var(--blue-light)" }}>Price Request</span>
          <h2 style={{ marginBottom: "16px",color: "var(--blue-light)" }}>Steel prices move daily — get today's rate</h2>
          <p style={{ color: "#BFD6ED", marginBottom: "26px" }}>
            Rather than list prices that go stale overnight, tell us what you need and we'll send today's
            rate straight to your phone.
          </p>
          <ul className="quote-points">
            {POINTS.map((point) => (
              <li key={point}>
                <Icon name="quote" size={20} />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="form" className="quote-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="qName">Name</label>
            <input id="qName" type="text" placeholder="Your full name" required value={form.name} onChange={update("name")} />
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="qMobile">Mobile Number</label>
              <input id="qMobile" type="tel" placeholder="10-digit mobile number" pattern="[0-9]{10}" required value={form.mobile} onChange={update("mobile")} />
            </div>
            <div className="field">
              <label htmlFor="qQty">Quantity</label>
              <input id="qQty" type="text" placeholder="e.g. 2 tonnes / 500 ft" required value={form.qty} onChange={update("qty")} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="qProduct">Product</label>
            <select id="qProduct" required value={form.product} onChange={update("product")}>
              <option value="" disabled>Select a product</option>
              {PRODUCT_NAMES.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
              <option value="Other / Not sure">Other / Not sure</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="qLocation">Delivery Location</label>
            <input id="qLocation" type="text" placeholder="e.g. Marthandam, near..." required value={form.location} onChange={update("location")} />
          </div>
          <button type="submit" className="btn btn-whatsapp btn-block">
            <Icon name="whatsapp" size={19} />
            Send Quotation Request
          </button>
          <p className="form-note">Sends your request via WhatsApp. We usually reply within a few hours during business time.</p>
        </Reveal>
      </div>
    </section>
  );
}
