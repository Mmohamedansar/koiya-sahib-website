import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import config from "../config.js";

const SLIDES = [
  {src: "Shop Front Page.jpeg", alt: "Koiya Sahib Shop"},
  {src: "shop office.jpeg", alt: "Koiya Sahib Office"},
  {src: "Barbed Wire.jpeg", alt: "Barbed Wire"},
  {src: "Fencing Wire.jpeg", alt: "Fence"},
  {src: "Binding Wire.avif", alt: "Binding Wire"},
  {src: "Rack.jpeg", alt: "Steel Rack"},
];

function Slideshow() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = (i) => {
    setCurrent((i + SLIDES.length) % SLIDES.length);
    resetTimer();
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      3800
    );
  }

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="hero-card">
      <div className="hero-slideshow">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`slide ${i === current ? "active" : ""}`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
            />
          </div>
        ))}

        <div className="slide-arrows">
          <button
            type="button"
            className="arrow"
            aria-label="Previous photo"
            onClick={prev}
          >
            <Icon name="arrowLeft" size={17} />
          </button>

          <button
            type="button"
            className="arrow"
            aria-label="Next photo"
            onClick={next}
          >
            <Icon name="arrowRight" size={17} />
          </button>
        </div>

        <div className="dots">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              className={`dot ${i === current ? "active" : ""}`}
              aria-label={`Go to photo ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default function Hero() {
  const quoteMsg = encodeURIComponent("Hi, I'd like a price quote for steel products.");

  return (
    <section className="hero" id="home">
      <div className="wrap hero-inner">
        <Reveal className="hero-copy">
          <span className="hero-loc">
            <Icon name="location" size={15} />
            Serving Nagercoil &amp; Kanyakumari District
          </span>
          <h1>
            Koiya Sahib <span className="accent">Iron &amp; Steel</span>
          </h1>
          <p className="lede">
            <strong>Quality steel at competitive prices</strong> — Quality racks, binding wire, and fencing materials at competitive prices for residential, commercial, agricultural, and industrial applications.
          </p>
          <div className="hero-btns">
            <a href={`tel:${config.phoneHref}`} className="btn btn-primary">
              <Icon name="phone" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${config.whatsappNumber}?text=${quoteMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <Icon name="whatsapp" size={19} />
              WhatsApp
            </a>
            <a href="#quote" className="btn btn-ghost">
              <Icon name="quote" />
              Get Quote
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-visual">
          <Slideshow />
        </Reveal>
      </div>

      <div className="delivery-banner">
        <div className="wrap">
          <Icon name="truck" size={20} />
          <strong>Delivery Available</strong>
          <span className="sep">&bull;</span>
          <span>Site delivery across Nagercoil &amp; Kanyakumari District</span>
          <span className="sep">&bull;</span>
          <span>Bulk orders welcome</span>
        </div>
      </div>
    </section>
  );
}
