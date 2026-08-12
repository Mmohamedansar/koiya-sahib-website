import config from "../config.js";

export function openWhatsApp(message) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${config.whatsappNumber}?text=${encoded}`, "_blank", "noopener");
}
