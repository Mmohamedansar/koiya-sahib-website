import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";

const PROPRIETORS = [
  { name: "Mohamed Ali", role: "Proprietor" , src: "Koiya Sahib Founder.jpeg" ,alt:"Mohamed Ali" },
  { name: "Syed Imthias Hassan", role: "Proprietor" , src: "Koiya Sahib Founder2.jpeg" ,alt:"Syed Imthias Hassan" },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">About Us</span>
          <h2>Built on steel, run on trust</h2>
          <p>A Trusted iron &amp; steel business supplying Nagercoil and the wider Kanyakumari District.</p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy">
            <h3 style={{ fontSize: "1.15rem", marginBottom: "12px" }}>Our History &amp; Founders</h3>
            <p>
              Koiya Sahib Iron &amp; Steel has grown from a single counter in Nagercoil into one of the
              area's dependable names for Steel Racks, Fencing Materials, and related products. Three generations of
              trading experience sit behind every quotation we give — we know steel, and we know what a job
              site actually needs.
            </p>
            <p>
              What started as a small family trade has grown alongside Nagercoil's own construction boom,
              supplying material for homes, godowns, Industries and commercial sites throughout
              Kanyakumari District.
            </p>
            <div className="founders-line">
              <Icon name="users" size={26} />
              <span>
                <strong>Built by one, trusted by many</strong> — proudly serving Nagercoil and Kanyakumari District for over decades.
      
              </span>
            </div>

            <div className="mv-grid">
              <div className="mv-card">
                <Icon name="target" size={26} />
                <h4>Our Mission</h4>
                <p>Supply genuine-grade steel at fair, transparent prices, and deliver it to site on time — every order, every time.</p>
              </div>
              <div className="mv-card alt">
                <Icon name="eye" size={26} />
                <h4>Our Vision</h4>
                <p>To be the first name Nagercoil &amp; Kanyakumari District People's think of for reliable steel and honest service.</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h3 style={{ fontSize: "1.15rem", marginBottom: "14px" }}>Meet the Proprietors</h3>
            <div className="proprietor-grid">
              {PROPRIETORS.map((p, i) => (
                <div className="proprietor-card" key={p.name}>
  <div className="proprietor-photo">
    {p.src ? (
      <img
        src={p.src}
        alt={p.name}
        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
      />
    ) : (
      <>
        <Icon name="user" size={46} />
        <span>Proprietor {i + 1} photo</span>
      </>
    )}
  </div>
  <div>
    <h4>{p.name}</h4>
    <span className="role">{p.role}</span>
    <p className="bio">Leading our Iron &amp; Steel business with a commitment to quality, trust, and customer satisfaction.</p>
  </div>
</div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="owner-msg">
          <div className="owner-avatar"><img src="Shop Front Page.jpeg" alt="Mohamed Ali" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} /></div>
          <div>
            <blockquote>
              "For over 50 years, our business has been built on trust, quality, and lasting relationships. Every customer we serve is a part of our journey, and every commitment we make is one we strive to keep."
            </blockquote>
            <cite>— Mohamed Ali, Proprietor</cite>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
