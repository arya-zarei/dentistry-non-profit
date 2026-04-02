export type NavItem = {
  label: string;
  path: string;
};

export type SocialLink = {
  platform: "Instagram" | "LinkedIn";
  href: string;
};

export type PageHero = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    path: string;
  };
  secondaryCta?: {
    label: string;
    path: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

export type ImpactStat = {
  label: string;
  value: string;
  note: string;
};

export type EventCard = {
  title: string;
  type: string;
  date: string;
  location: string;
  summary: string;
};

export type KitItem = {
  name: string;
  description: string;
  icon: string;
};

export type MessageFormPayload = {
  name: string;
  email: string;
  contactDetail: string;
  message: string;
  attachments: File[];
};

export type MessageSubmitState = "idle" | "submitting" | "success" | "error";

export type Testimonial = {
  quote: string;
  person: string;
  role: string;
};
