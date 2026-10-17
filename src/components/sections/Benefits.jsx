import Eyebrow from "../ui/Eyebrow.jsx";
import { benefits, phoneIcons } from "../../data/benefits.js";

function BenefitItem({ icon, title, text }) {
  return (
    <article className="benefit">
      <span className="benefit__icon" aria-hidden="true">{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

function BenefitsVisual() {
  return (
    <div className="benefits__visual" aria-hidden="true">
      <span className="benefits__sun"></span>
      <div className="shopping-phone">
        <div className="shopping-phone__speaker"></div>
        <div className="shopping-phone__grid">
          {phoneIcons.map((icon) => (
            <span key={icon}>{icon}</span>
          ))}
        </div>
        <span className="shopping-phone__button"></span>
      </div>
      <div className="shopping-bag">🛍️</div>
      <span className="benefits__spark benefits__spark--one">✳</span>
      <span className="benefits__spark benefits__spark--two">✦</span>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="benefits section" id="about" aria-labelledby="benefits-title">
      <div className="container benefits__inner">
        <div className="benefits__list">
          <Eyebrow>A better way to shop</Eyebrow>
          <h2 id="benefits-title">
            Good jackets.<br />Good reasons.
          </h2>
          {benefits.map((benefit) => (
            <BenefitItem key={benefit.id} {...benefit} />
          ))}
        </div>
        <BenefitsVisual />
      </div>
    </section>
  );
}
