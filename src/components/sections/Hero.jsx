import Eyebrow from "../ui/Eyebrow.jsx";
import Button from "../ui/Button.jsx";
import ImageFrame from "../ui/ImageFrame.jsx";
import heroImage from "../../assets/images/hero-man.png";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <Eyebrow>Winter collection 2026</Eyebrow>
          <h1 className="hero__title" id="hero-title">
            <span className="hero__title--accent">Be the penguins</span>
            <span>of winter</span>
          </h1>
          <p className="hero__text">
            Stay warm, feel good, and make every winter day your own with a jacket made for you.
          </p>
          <Button href="#products">
            <span aria-hidden="true">🛒</span> Shop collection
          </Button>
        </div>
        <div className="hero__art">
          <ImageFrame
            className="hero__image-wrap"
            imgClassName="hero__image"
            src={heroImage}
            alt="Man holding shopping bags"
            lazy={false}
          />
        </div>
      </div>
    </section>
  );
}
