import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";

const STATS = [
  { icon: "clock", title: "50+ Years", desc: "Of trusted experience in the Iron & Steel trade" },
  { icon: "layers", title: "7+ Categories", desc: "Steel, wire & fencing products in stock" },
  { icon: "users", title: "Trusted", desc: "By Customers across the district" },
  { icon: "truck", title: "Fast Delivery", desc: "Site Delivery,bulk loads handled" },
];

export default function Stats() {
  return (
    <section className="stats-row">
      <div className="wrap stats-grid">
        {STATS.map((s) => (
          <Reveal key={s.title} className="stat-card">
            <span className="icon">
              <Icon name={s.icon} size={23} />
            </span>
            <div>
              <b>{s.title}</b>
              <span>{s.desc}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
