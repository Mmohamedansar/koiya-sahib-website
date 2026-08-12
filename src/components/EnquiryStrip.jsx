import { useState } from "react";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import { openWhatsApp } from "../utils/whatsapp.js";
import { useToast } from "./ToastContext.jsx";

export default function EnquiryStrip() {
  const showToast = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi, I'd like a callback.\n\nName: ${name}\nMobile: ${phone}`;
    showToast("Opening WhatsApp — request a callback…");
    openWhatsApp(msg);
    setName("");
    setPhone("");
  };

  return (
    <section className="enquiry-strip">
      <div className="wrap" style={{ padding: "52px 24px" }}>
        <div className="enquiry-inner">
          <Reveal>
            <h3>Have a quick question?</h3>
            <p>Leave your name and number — we'll call you back the same day.</p>
          </Reveal>
          <Reveal as="form" className="enquiry-mini-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your name" required value={name} onChange={(e) => setName(e.target.value)} />
            <input type="tel" placeholder="Mobile number" required value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button type="submit" className="btn btn-whatsapp">
              <Icon name="whatsapp" size={19} />
              Request Callback
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
