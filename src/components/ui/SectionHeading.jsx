import Eyebrow from "./Eyebrow.jsx";

// Eyebrow + title (+ optional right-hand slot) used above every product grid.
export default function SectionHeading({ eyebrow, title, id, children }) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={id}>{title}</h2>
      </div>
      {children}
    </div>
  );
}
