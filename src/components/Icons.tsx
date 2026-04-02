import type { SVGProps } from "react";

export function ToothIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21.6 9.5c-8.7 0-14.3 7.3-14.3 15.9 0 8 4.1 13.5 7.2 19.5 1.8 3.6 2.5 9.1 3.4 11.8.6 1.8 1.6 2.8 3.1 2.8 2.7 0 4-2.9 5.1-6.1 1.1-3.4 2.2-7.3 5.9-7.3s4.8 3.9 5.9 7.3c1 3.2 2.4 6.1 5.1 6.1 1.5 0 2.5-1 3.1-2.8.9-2.7 1.6-8.2 3.4-11.8 3.1-6 7.2-11.5 7.2-19.5 0-8.6-5.6-15.9-14.3-15.9-4.5 0-6.4 2.3-10.4 2.3-4 0-5.9-2.3-10.4-2.3Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17.2" cy="6.8" r="1.25" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3.5" fill="currentColor" />
      <path d="M8 10.1V17" stroke="white" strokeWidth="1.9" strokeLinecap="round" />
      <path
        d="M12 17v-3.85c0-1.67 1-2.85 2.5-2.85 1.43 0 2.25.94 2.25 2.85V17"
        stroke="white"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="7.2" r="1.15" fill="white" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UploadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 15V5m0 0 3.5 3.5M12 5 8.5 8.5M5 18.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
