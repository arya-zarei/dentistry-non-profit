import type { PropsWithChildren, ReactNode } from "react";

type SectionProps = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
}>;

export function Section({ eyebrow, title, intro, className, children }: SectionProps) {
  return (
    <section className={className ? `content-section ${className}` : "content-section"}>
      <div className="container">
        <div className="section-heading">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

type GridCardsProps = {
  items: { title: string; copy: string; label?: string; icon?: ReactNode }[];
};

export function GridCards({ items }: GridCardsProps) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <article className="info-card" key={item.title}>
          {item.label ? <span className="mini-label">{item.label}</span> : null}
          {item.icon ? <div className="card-icon">{item.icon}</div> : null}
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
        </article>
      ))}
    </div>
  );
}
