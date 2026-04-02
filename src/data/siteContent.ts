import type {
  EventCard,
  ImpactStat,
  KitItem,
  NavItem,
  PageHero,
  SocialLink,
  Testimonial,
} from "../types";

export const navItems: NavItem[] = [
  { label: "About Us", path: "/" },
  { label: "Our Kits", path: "/our-kits" },
  { label: "Events & Outreach", path: "/events-outreach" },
  { label: "Impact", path: "/impact" },
  { label: "Donate", path: "/donate" },
];

export const socialLinks: SocialLink[] = [
  { platform: "Instagram", href: "" },
  { platform: "LinkedIn", href: "" },
];

export const galleryImages = {
  checkup:
    "https://images.pexels.com/photos/7800569/pexels-photo-7800569.jpeg?auto=compress&cs=tinysrgb&w=1200",
  clinic:
    "https://images.pexels.com/photos/3845723/pexels-photo-3845723.jpeg?auto=compress&cs=tinysrgb&w=1200",
  brushing:
    "https://images.pexels.com/photos/6501932/pexels-photo-6501932.jpeg?auto=compress&cs=tinysrgb&w=1200",
  smile:
    "https://images.pexels.com/photos/9475385/pexels-photo-9475385.jpeg?auto=compress&cs=tinysrgb&w=1200",
  chair:
    "https://images.pexels.com/photos/12427085/pexels-photo-12427085.jpeg?auto=compress&cs=tinysrgb&w=1200",
  tools:
    "https://images.pexels.com/photos/15499664/pexels-photo-15499664.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const aboutHero: PageHero = {
  eyebrow: "Oral Health Access For Every Community",
  title: "Designing brighter smiles through practical care, education, and outreach.",
  description:
    "smilesnonprofit is a placeholder dental non-profit concept focused on reducing oral-health barriers with prevention-first programs, community kits, and people-centered outreach.",
  primaryCta: { label: "Support The Mission", path: "/donate" },
  secondaryCta: { label: "Explore Our Kits", path: "/our-kits" },
  image: {
    src: galleryImages.checkup,
    alt: "Dental professional supporting a child during a checkup.",
  },
};

export const kitHero: PageHero = {
  eyebrow: "Preventive Care, Ready To Travel",
  title: "Simple oral-care kits built for dignity, education, and everyday use.",
  description:
    "Each kit pairs essential dental supplies with clear guidance so families, students, and partners can turn one moment of support into healthier daily habits.",
  primaryCta: { label: "See Our Impact", path: "/impact" },
  secondaryCta: { label: "Partner With Us", path: "/donate" },
  image: {
    src: galleryImages.tools,
    alt: "Dental care supplies arranged neatly on a clean surface.",
  },
};

export const outreachHero: PageHero = {
  eyebrow: "Events That Build Trust",
  title: "From school visits to pop-up clinics, outreach starts with real relationships.",
  description:
    "Our events and outreach programs are structured to meet communities where they already gather, learn, and care for one another.",
  primaryCta: { label: "Volunteer With Us", path: "/donate" },
  secondaryCta: { label: "Read About Our Story", path: "/" },
  image: {
    src: galleryImages.chair,
    alt: "Dental clinic environment prepared for patient care.",
  },
};

export const impactHero: PageHero = {
  eyebrow: "Proof In Practice",
  title: "A clearer look at how local action turns into measurable oral-health progress.",
  description:
    "This sample impact page uses placeholder metrics and stories to show how a dental non-profit can report momentum with confidence and transparency.",
  primaryCta: { label: "Help Fund More Care", path: "/donate" },
  secondaryCta: { label: "View Outreach Events", path: "/events-outreach" },
  image: {
    src: galleryImages.clinic,
    alt: "Modern dental clinic with care equipment and workspace.",
  },
};

export const donateHero: PageHero = {
  eyebrow: "Back Prevention That Lasts",
  title: "Your support helps place oral-health tools and education directly into community hands.",
  description:
    "This filler fundraising page is designed to make giving feel transparent, specific, and mission-linked, even before a live donation processor is added.",
  primaryCta: { label: "Message Our Team", path: "#message-us" },
  secondaryCta: { label: "Review Our Impact", path: "/impact" },
  image: {
    src: galleryImages.smile,
    alt: "Person brushing teeth as part of a daily oral care routine.",
  },
};

export const aboutStats: ImpactStat[] = [
  {
    value: "12,500+",
    label: "Kits Imagined For Distribution",
    note: "Placeholder count for prototype storytelling.",
  },
  {
    value: "34",
    label: "Community Partners",
    note: "Schools, clinics, and neighborhood organizers.",
  },
  {
    value: "91%",
    label: "Participants Reporting Better Habits",
    note: "Sample post-event survey outcome.",
  },
];

export const impactStats: ImpactStat[] = [
  {
    value: "18,400",
    label: "Preventive Kits Shared",
    note: "Filler number representing cumulative distribution.",
  },
  {
    value: "2,900",
    label: "Students Reached",
    note: "Across workshops, school programs, and demos.",
  },
  {
    value: "46",
    label: "Volunteer Dentists & Hygienists",
    note: "Clinical and non-clinical contributors.",
  },
  {
    value: "11",
    label: "Cities Served",
    note: "Including recurring outreach stops and pilot expansions.",
  },
];

export const kitItems: KitItem[] = [
  {
    icon: "TB",
    name: "Toothbrush",
    description: "Soft-bristle brush selected for daily preventive care and easy family use.",
  },
  {
    icon: "TP",
    name: "Toothpaste",
    description: "Fluoride toothpaste packed in travel-ready sizes for simple routine building.",
  },
  {
    icon: "FL",
    name: "Floss",
    description: "Starter-friendly floss options with clear, approachable use guidance.",
  },
  {
    icon: "RN",
    name: "Rinse",
    description: "Placeholder oral-rinse support for older participants where appropriate.",
  },
  {
    icon: "GD",
    name: "Care Guide",
    description: "Visual oral-health guide with reminders, habits, and next-step resources.",
  },
];

export const events: EventCard[] = [
  {
    title: "Campus Kit Packing Night",
    type: "Volunteer Event",
    date: "May 14, 2026",
    location: "Toronto, ON",
    summary: "Students and supporters assemble placeholder hygiene kits before summer outreach events.",
  },
  {
    title: "School Oral Health Workshop",
    type: "Education Session",
    date: "June 02, 2026",
    location: "Mississauga, ON",
    summary: "Interactive brushing, flossing, and prevention demo tailored for elementary classrooms.",
  },
  {
    title: "Community Pop-Up Smile Day",
    type: "Outreach Clinic",
    date: "July 18, 2026",
    location: "Scarborough, ON",
    summary: "A sample outreach event combining intake support, kit distribution, and referrals.",
  },
];

export const values = [
  {
    title: "Prevention First",
    copy: "We focus on habits, early education, and simple tools that reduce the need for crisis care later.",
  },
  {
    title: "People Before Process",
    copy: "Every touchpoint is designed to feel welcoming, stigma-free, and easy to understand.",
  },
  {
    title: "Built With Partners",
    copy: "We work alongside schools, volunteers, clinics, and community leaders rather than around them.",
  },
];

export const outreachTimeline = [
  {
    label: "Listen",
    title: "Partner intake and community listening",
    copy: "We begin by understanding where dental-care gaps show up most often and what support is realistically useful.",
  },
  {
    label: "Activate",
    title: "Events, kits, and on-site education",
    copy: "Pop-up workshops, volunteer mobilization, and care-kit delivery meet people in trusted local spaces.",
  },
  {
    label: "Follow Through",
    title: "Resources, referrals, and reporting",
    copy: "Participants leave with take-home tools while partners receive clean, digestible impact updates.",
  },
];

export const coverageAreas = [
  "Downtown school partnerships",
  "Community center family days",
  "Youth outreach pilots",
  "Faith-based neighborhood drives",
  "Dental volunteer mentorship hubs",
  "Pop-up clinic partnerships",
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The workshop felt simple and empowering. Families left with tools they could actually start using that same night.",
    person: "Amina R.",
    role: "Placeholder community partner",
  },
  {
    quote:
      "We needed resources that made oral health feel approachable, not intimidating. This model made that possible.",
    person: "Jordan C.",
    role: "Placeholder school coordinator",
  },
  {
    quote:
      "The combination of prevention education and kits helped our volunteers create immediate, practical value.",
    person: "Dr. Elena V.",
    role: "Placeholder volunteer dentist",
  },
];

export const donationTiers = [
  {
    amount: "$25",
    title: "Starter Support",
    copy: "Helps fund placeholder essentials for one or two hygiene kits.",
  },
  {
    amount: "$100",
    title: "Workshop Backer",
    copy: "Supports educational print materials and supplies for a small outreach session.",
  },
  {
    amount: "$250",
    title: "Community Bundle",
    copy: "Contributes to bulk purchasing and volunteer event readiness.",
  },
  {
    amount: "$500",
    title: "Partner Boost",
    copy: "Helps pilot a larger school or community-center distribution day.",
  },
];

export const donationAllocation = [
  {
    title: "48% Preventive Kits",
    copy: "Core oral-care supplies, packaging, and distribution prep.",
  },
  {
    title: "27% Education Materials",
    copy: "Printed guides, visual demos, workshop kits, and translation support.",
  },
  {
    title: "15% Outreach Operations",
    copy: "Volunteer coordination, transportation, and event logistics.",
  },
  {
    title: "10% Growth & Reporting",
    copy: "Partnership outreach, measurement, and donor communications.",
  },
];

export const partnerLogos = [
  "Northwell Dental Group",
  "SmileLab Students",
  "CareBridge Clinics",
  "Youth Wellness Network",
];
