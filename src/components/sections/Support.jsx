import ContactForm from "./ContactForm.jsx";

function SupportArt() {
  return (
    <div className="support__art" aria-hidden="true">
      <div className="support__bubble support__bubble--yellow">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="support__bubble support__bubble--teal">
        <span className="line"></span>
        <span className="line line--short"></span>
        <span className="line line--mid"></span>
      </div>
      <span className="support__tail"></span>
    </div>
  );
}

export default function Support({ onMessageSent }) {
  return (
    <section className="support section" id="contact" aria-labelledby="support-title">
      <div className="container support__inner">
        <div className="support__content">
          <h2 id="support-title">
            Contact &amp;<br />
            <span>Live Support</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam.
          </p>
          <span className="support__highlight" aria-hidden="true"></span>
          <SupportArt />
        </div>
        <div className="support__form-wrap">
          <h3>Your Message</h3>
          <ContactForm onSent={onMessageSent} />
        </div>
      </div>
    </section>
  );
}
