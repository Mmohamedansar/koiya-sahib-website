import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import config from "../config.js";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#brands", label: "Brands" },
  { href: "#quote", label: "Get Quote" },
  { href: "#delivery", label: "Delivery Areas" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  const closeNav = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="wrap nav-row">
        <a href="#home" className="brand">
          <span className="brand-text">
            <span><img src="Koiya Store Logo.jpeg" alt={config.businessName} style={{ width: "130px", height: "40px" }} /></span>
          </span>
        </a>

        <nav className={`main-nav ${open ? "open" : ""}`} id="mainNav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href.slice(1) ? "active" : ""}
              onClick={closeNav}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href={`tel:${config.phoneHref}`} className="btn btn-primary btn-sm">
            <Icon name="phone" />
            <span>Call Now</span>
          </a>
          <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
            <Icon name="menu" size={26} />
          </button>
        </div>
      </div>

      <div className={`nav-backdrop ${open ? "show" : ""}`} onClick={closeNav} />
    </header>
  );
}
