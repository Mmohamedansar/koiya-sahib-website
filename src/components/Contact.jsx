import { useState } from "react";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import config from "../config.js";
import { openWhatsApp } from "../utils/whatsapp.js";
import { useToast } from "./ToastContext.jsx";

export default function Contact() {
  const showToast = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi, my name is ${form.name} (${form.phone}).\n\n${form.message}`;
    showToast("Opening WhatsApp with your message…");
    openWhatsApp(msg);
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-pad">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Contact Page</span>
          <h2>Talk to us</h2>
          <p>Call, WhatsApp, or drop by the shop — whichever's easiest for you.</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="contact-list">
              <div className="contact-item">
                <span className="icon"><Icon name="phone" size={21} /></span>
                <div><h5>Phone</h5><a href={`tel:${config.phoneHref}`}>{config.phoneDisplay}</a></div>
              </div>
              <div className="contact-item">
                <span className="icon"><Icon name="whatsapp" size={21} /></span>
                <div>
                  <h5>WhatsApp</h5>
                  <a href={`https://wa.me/${config.whatsappNumber}`} target="_blank" rel="noopener noreferrer">{config.phoneDisplay}</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon"><Icon name="mail" size={21} /></span>
                <div><h5>Email</h5><a href={`mailto:${config.email}`}>{config.email}</a></div>
              </div>
              <div className="contact-item">
                <span className="icon"><Icon name="location" size={21} /></span>
                <div><h5>Address</h5><p>{config.businessName}, {config.address}</p></div>
              </div>
              <div className="contact-item" style={{ display: "block" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "10px" }}>
                  <span className="icon"><Icon name="clock" size={21} /></span>
                  <div><h5>Business Hours</h5></div>
                </div>
                <table className="hours-table">
                  <tbody>
                    {config.hours.map((h) => (
                      <tr key={h.day}><td>{h.day}</td><td>{h.time}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="map-frame" style={{ aspectRatio: "16/9" }}>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31592.893333557102!2d77.41156424424436!3d8.191505164317757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f12e92ed0c79%3A0xf733da14fcf1feab!2sKOIYA%20SAHIB%20IRON%20%26%20STEEL!5e0!3m2!1sen!2sin!4v1786465481586!5m2!1sen!2sin`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shop location on Google Maps"
              />
            </div>
          </Reveal>

          <Reveal className="contact-form-card" as="div">
            <h3 style={{ fontSize: "1.1rem", marginBottom: "18px" }}>Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="cName">Name</label>
                  <input id="cName" type="text" placeholder="Your name" required value={form.name} onChange={update("name")} />
                </div>
                <div className="field">
                  <label htmlFor="cPhone">Phone</label>
                  <input id="cPhone" type="tel" placeholder="Mobile number" required value={form.phone} onChange={update("phone")} />
                </div>
              </div>
              <div className="field">
                <label htmlFor="cEmail">Email (optional)</label>
                <input id="cEmail" type="email" placeholder="you@gmail.com" value={form.email} onChange={update("email")} />
              </div>
              <div className="field">
                <label htmlFor="cMsg">Message</label>
                <textarea id="cMsg" placeholder="Tell us what you need..." required value={form.message} onChange={update("message")} />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                <Icon name="send" />
                Send Message
              </button>
              <p className="form-note">Opens WhatsApp with your message pre-filled, ready to send.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
