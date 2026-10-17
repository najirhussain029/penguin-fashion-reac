export default function Logo({ footer = false }) {
  return (
    <a className={`logo${footer ? " logo--footer" : ""}`} href="#home" aria-label="Penguin Fashion home">
      <span className="logo__mark" aria-hidden="true">🐧</span>
      <span>
        <span className="logo__accent">Penguin</span> Fashion
      </span>
    </a>
  );
}
