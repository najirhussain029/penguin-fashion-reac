import Logo from "../ui/Logo.jsx";

export default function Footer() {
  return (
    <footer className="footer" id="contact-footer">
      <div className="container footer__inner">
        <Logo footer />
        <p>
          Najir Hussain · <a href="tel:01737114304">01737114304</a> ·{" "}
          <a href="mailto:oernguin@fasihion.com">oernguin@fasihion.com</a>
        </p>
        <a className="footer__link" href="mailto:oernguin@fasihion.com">
          Get in touch <span aria-hidden="true">→</span>
        </a>
      </div>
    </footer>
  );
}
