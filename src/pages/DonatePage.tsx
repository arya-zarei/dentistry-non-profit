import { PageHero } from "../components/PageHero";
import { Section } from "../components/SectionBlocks";
import { donateHero, donationAllocation, donationTiers, partnerLogos } from "../data/siteContent";

export function DonatePage() {
  return (
    <>
      <PageHero hero={donateHero} />

      <Section
        eyebrow="Giving Options"
        title="Use this layout to make future fundraising asks feel specific and transparent."
      >
        <div className="donation-grid">
          {donationTiers.map((tier) => (
            <article className="donation-card" key={tier.amount}>
              <span className="donation-amount">{tier.amount}</span>
              <h3>{tier.title}</h3>
              <p>{tier.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Where Support Goes"
        title="A simple allocation view builds trust before real annual-report data is available."
      >
        <div className="allocation-grid">
          {donationAllocation.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Partners"
        title="These placeholder partner marks can become sponsor logos, chapter names, or institutional supporters."
      >
        <div className="partner-strip">
          {partnerLogos.map((partner) => (
            <div className="partner-pill" key={partner}>
              {partner}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
