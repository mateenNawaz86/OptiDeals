import type { ReactNode, SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;
export type Icon = (props: IconProps) => ReactNode;

/** One 24px stroke icon set so every glyph on the site shares weight and corner style. */
function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const CheckIcon: Icon = (props) => (
  <Svg {...props}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
);

export const ArrowRightIcon: Icon = (props) => (
  <Svg {...props}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </Svg>
);

export const PlayIcon: Icon = (props) => (
  <Svg {...props} fill="currentColor" stroke="none">
    <path d="M8 5.14v13.72a1 1 0 0 0 1.52.86l11.2-6.86a1 1 0 0 0 0-1.72L9.52 4.28A1 1 0 0 0 8 5.14Z" />
  </Svg>
);

export const TrophyIcon: Icon = (props) => (
  <Svg {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </Svg>
);

export const FilmIcon: Icon = (props) => (
  <Svg {...props}>
    <rect x="2" y="2" width="20" height="20" rx="2.5" />
    <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
  </Svg>
);

export const GlobeIcon: Icon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
  </Svg>
);

export const ZapIcon: Icon = (props) => (
  <Svg {...props}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
  </Svg>
);

export const HeadphonesIcon: Icon = (props) => (
  <Svg {...props}>
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  </Svg>
);

export const TagIcon: Icon = (props) => (
  <Svg {...props}>
    <path d="M12.59 2.59A2 2 0 0 0 11.17 2H4a2 2 0 0 0-2 2v7.17a2 2 0 0 0 .59 1.42l8.7 8.7a2.43 2.43 0 0 0 3.42 0l6.58-6.58a2.43 2.43 0 0 0 0-3.42l-8.7-8.7Z" />
    <path d="M7.5 7.5h.01" />
  </Svg>
);

export const ShieldCheckIcon: Icon = (props) => (
  <Svg {...props}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7Z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const TvIcon: Icon = (props) => (
  <Svg {...props}>
    <rect x="2" y="7" width="20" height="15" rx="2" />
    <path d="m17 2-5 5-5-5" />
  </Svg>
);

export const SmartphoneIcon: Icon = (props) => (
  <Svg {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2.5" />
    <path d="M12 18h.01" />
  </Svg>
);

export const TabletIcon: Icon = (props) => (
  <Svg {...props}>
    <rect x="4" y="2" width="16" height="20" rx="2.5" />
    <path d="M12 18h.01" />
  </Svg>
);

export const MonitorIcon: Icon = (props) => (
  <Svg {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </Svg>
);

export const BoxIcon: Icon = (props) => (
  <Svg {...props}>
    <rect x="2" y="8" width="20" height="9" rx="2.5" />
    <path d="M6 12.5h.01M10 12.5h4M6 21h12" />
  </Svg>
);

export const XIcon: Icon = (props) => (
  <Svg {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Svg>
);

export const UsersIcon: Icon = (props) => (
  <Svg {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </Svg>
);

export const LayoutIcon: Icon = (props) => (
  <Svg {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <path d="M3 9h18M9 21V9" />
  </Svg>
);

export const ClockIcon: Icon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </Svg>
);

export const MessageIcon: Icon = (props) => (
  <Svg {...props}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22l5.9-2Z" />
  </Svg>
);

/** WhatsApp glyph (filled). */
export const WhatsAppIcon: Icon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.35ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88Zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z" />
  </svg>
);
