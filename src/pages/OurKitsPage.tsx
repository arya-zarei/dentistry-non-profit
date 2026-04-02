import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { GridCards, Section } from "../components/SectionBlocks";
import { galleryImages, kitHero, kitItems } from "../data/siteContent";

export function OurKitsPage() {
  return (
    <>
      <PageHero hero={kitHero} />

      <Section
        eyebrow="Inside Every Kit"
        title="A small set of essentials can support a healthier daily routine."
      >
        <div className="kit-grid">
          {kitItems.map((item) => (
            <article className="kit-card" key={item.name}>
              <span className="kit-icon">{item.icon}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How Kits Reach People"
        title="A simple three-step model keeps the program easy to understand and easy to scale."
      >
        <GridCards
          items={[
            {
              label: "01",
              title: "Assemble",
              copy: "Volunteers and partners prep kits in bulk with consistent quality and clean presentation.",
            },
            {
              label: "02",
              title: "Distribute",
              copy: "Kits are shared during events, school sessions, and local partner activations.",
            },
            {
              label: "03",
              title: "Reinforce",
              copy: "Take-home guides and follow-up support help families turn supplies into lasting habits.",
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="Why These Tools Matter"
        title="The product language stays human, clear, and mission-linked."
      >
        <div className="feature-panel">
          <div className="feature-copy">
            <h3>Filler metric idea: each kit is framed as a prevention starter, not just a giveaway.</h3>
            <p>
              This page is built to support future real-world content like sourcing standards,
              ingredient notes, pediatric variations, and multilingual instructions without needing
              a redesign.
            </p>
            <Link to="/impact" className="button button-primary">
              See Placeholder Results
            </Link>
          </div>
          <div className="feature-images two-up">
            <img src={galleryImages.tools} alt="Toothbrush and toothpaste supplies." loading="lazy" />
            <img src={galleryImages.brushing} alt="Teeth brushing demonstration." loading="lazy" />
          </div>
        </div>
      </Section>
    </>
  );
}
