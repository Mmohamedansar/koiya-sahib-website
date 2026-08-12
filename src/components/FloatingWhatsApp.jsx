import Icon from "./Icon.jsx";
import config from "../config.js";

export default function FloatingWhatsApp() {
  const msg = encodeURIComponent("Hi, I'd like to enquire about steel products.");
  return (
    <a
      className="float-whatsapp"
      href={`https://wa.me/${config.whatsappNumber}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <span className="wa-tip">Chat with us</span>
      <Icon name="whatsapp" size={30} />
    </a>
  );
}
