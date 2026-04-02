import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { GridCards, Section } from "../components/SectionBlocks";
import { aboutHero, aboutStats, galleryImages, values } from "../data/siteContent";

export function AboutPage() {
  return (
    <>
      <PageHero hero={aboutHero} />

      <Section
        eyebrow="Why It Matters"
        title="Oral health changes confidence, comfort, and long-term wellbeing."
        intro="This section uses filler messaging to show how the site can frame dental access as both a health issue and a dignity issue."
      >
        <div className="stats-grid">
          {aboutStats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <h3>{stat.label}</h3>
              <p>{stat.note}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What We Do"
        title="We combine practical supplies with accessible education."
      >
        <GridCards
          items={[
            {
              title: "Education Workshops",
              copy: "Hands-on demos and prevention-first content adapted for schools, youth groups, and community gatherings.",
            },
            {
              title: "Care Kits",
              copy: "Travel-ready dental kits designed for easy use, clear instructions, and dignified presentation.",
            },
            {
              title: "Outreach Activation",
              copy: "Pop-up events and partner programs that bring support directly into trusted local spaces.",
            },
            {
              title: "Partnership Building",
              copy: "Collaborations with clinics, student volunteers, and local leaders to sustain outreach efforts.",
            },
          ]}
        />
      </Section>

      <Section
        eyebrow="Values"
        title="Built with a calm, modern voice and a community-centered point of view."
      >
        <div className="split-grid">
          <div className="image-stack">
            <img src={galleryImages.clinic} alt="Dental clinic setup." loading="lazy" />
            <img src={galleryImages.smile} alt="Daily brushing routine in progress." loading="lazy" />
          </div>
          <div className="stacked-list">
            {values.map((value) => (
              <article className="list-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </article>
            ))}
            <div className="inline-cta">
              <p>Ready to support a stronger oral-health future?</p>
              <Link to="/donate" className="button button-secondary">
                Visit Donate
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
