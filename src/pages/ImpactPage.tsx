import { PageHero } from "../components/PageHero";
import { Section } from "../components/SectionBlocks";
import { coverageAreas, impactHero, impactStats, testimonials } from "../data/siteContent";

export function ImpactPage() {
  return (
    <>
      <PageHero hero={impactHero} />

      <Section
        eyebrow="Impact Dashboard"
        title="Big-number storytelling keeps the page readable and donor-friendly."
      >
        <div className="stats-grid four-up">
          {impactStats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <h3>{stat.label}</h3>
              <p>{stat.note}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Coverage"
        title="A chapter-style list works well before adding a real map or region view."
      >
        <div className="coverage-grid">
          {coverageAreas.map((area) => (
            <article className="coverage-card" key={area}>
              <span className="coverage-dot" />
              <p>{area}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Stories"
        title="Placeholder testimonials show how proof can feel human, not overly corporate."
      >
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.person}>
              <p>“{item.quote}”</p>
              <strong>{item.person}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
