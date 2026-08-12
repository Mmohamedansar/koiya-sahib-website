import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import config from "../config.js";

export default function DeliveryAreas() {
  return (
    <section id="delivery" className="section-pad">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Delivery Areas</span>
          <h2>We deliver across Kanyakumari District</h2>
          <p>Site delivery available for bulk orders. Not sure if we cover your area? Just Contact us.</p>
        </Reveal>

        <div className="delivery-grid">
          <Reveal>
            <div className="area-chips">
              {config.deliveryAreas.map((area) => (
                <span className="area-chip" key={area}>
                  <Icon name="location" size={15} />
                  {area}
                </span>
              ))}
            </div>
            <div style={{ marginTop: "24px", padding: "18px", background: "#fff", borderRadius: "12px", border: "1px solid var(--mist-2)" }}>
              <p style={{ fontSize: "0.88rem", color: "var(--steel)" }}>
                Don't see your village listed? We regularly deliver beyond this list —{" "}
                <a href="#quote" style={{ color: "var(--blue)", fontWeight: 600 }}>request a quote</a> and mention your location.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
