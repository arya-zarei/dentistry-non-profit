import { Link } from "react-router-dom";
import type { PageHero as PageHeroType } from "../types";
import { ArrowRightIcon } from "./Icons";

type Props = {
  hero: PageHeroType;
};

export function PageHero({ hero }: Props) {
  const isWidgetTrigger = hero.primaryCta.path.startsWith("#");

  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="hero-actions">
            {isWidgetTrigger ? (
              <button
                type="button"
                className="button button-primary"
                onClick={() => window.dispatchEvent(new CustomEvent("open-message-widget"))}
              >
                {hero.primaryCta.label}
                <ArrowRightIcon />
              </button>
            ) : (
              <Link className="button button-primary" to={hero.primaryCta.path}>
                {hero.primaryCta.label}
                <ArrowRightIcon />
              </Link>
            )}
            {hero.secondaryCta ? (
              <Link className="button button-secondary" to={hero.secondaryCta.path}>
                {hero.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-shell">
            <img src={hero.image.src} alt={hero.image.alt} loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
}
