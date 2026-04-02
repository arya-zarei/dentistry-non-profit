import { PageHero } from "../components/PageHero";
import { Section } from "../components/SectionBlocks";
import { events, galleryImages, outreachHero, outreachTimeline } from "../data/siteContent";

export function EventsOutreachPage() {
  return (
    <>
      <PageHero hero={outreachHero} />

      <Section
        eyebrow="Events"
        title="Placeholder programming that feels active, local, and welcoming."
      >
        <div className="events-grid">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <span className="mini-label">{event.type}</span>
              <h3>{event.title}</h3>
              <p className="event-meta">
                {event.date} · {event.location}
              </p>
              <p>{event.summary}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Outreach Flow"
        title="The page structure gives future real programs a clean way to explain how outreach works."
      >
        <div className="timeline">
          {outreachTimeline.map((item) => (
            <article className="timeline-card" key={item.title}>
              <span className="timeline-step">{item.label}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Volunteer Momentum"
        title="Use this section later for sign-ups, ambassador programs, or chapter recruitment."
      >
        <div className="feature-panel">
          <div className="feature-images">
            <img src={galleryImages.checkup} alt="Child receiving dental attention." loading="lazy" />
          </div>
          <div className="feature-copy">
            <h3>Filler idea: highlight approachable volunteer pathways.</h3>
            <p>
              Instead of asking for high commitment immediately, this layout supports low-friction
              entry points like packing nights, school workshops, referral support, and community
              event staffing.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
