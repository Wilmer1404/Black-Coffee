const paths = {
  coffee: (
    <>
      <path d="M17 8h1a3 3 0 0 1 0 6h-1" />
      <path d="M3 8h14v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Z" />
      <path d="M7 2v2M11 2v2M15 2v2" />
    </>
  ),
  sparkle: <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />,
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z" />
      <path d="M20 17v4H6.5A2.5 2.5 0 0 1 4 18.5" />
    </>
  ),
  dice: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
      <circle cx="15.5" cy="8.5" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="8.5" cy="15.5" r="1" fill="currentColor" />
      <circle cx="15.5" cy="15.5" r="1" fill="currentColor" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </>
  ),
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8Z" />,
  tiktok: <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3a5 5 0 0 0 5 5" />,
  chat: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  whatsapp: <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />,
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />,
  flame: <path d="M12 22a7 7 0 0 0 7-7c0-3-2-5-3.5-7C14 6 13.5 4 13.5 2c-3 2-5 5-5 8-1-.7-1.5-1.800-1.500-3C5 9 5 12 5 15a7 7 0 0 0 7 7Z" />,
  snowflake: <path d="M12 2v20M4.9 7l14.200 10M19.100 7 4.900 17M9 3.500l3 2.500 3-2.500M9 20.500l3-2.500 3 2.500" />,
  bag: (
    <>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6Z" />
      <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
    </>
  ),
  wifi: <path d="M5 12.500a10 10 0 0 1 14 0M8.500 16a5 5 0 0 1 7 0M2 8.800a15 15 0 0 1 20 0M12 20h.01" />,
  quote: <path d="M7 7h4v4c0 3-1.500 5-4 6M15 7h4v4c0 3-1.500 5-4 6" />,
  feather: (
    <>
      <path d="M20.200 3.800a6 6 0 0 0-8.500 0L5 10.500V19h8.500l6.700-6.700a6 6 0 0 0 0-8.500Z" />
      <path d="M16 8 2 22M17.500 15H9" />
    </>
  ),
  ticket: (
    <>
      <path d="M2 9a3 3 0 0 1 0 6v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a3 3 0 0 1 0-6V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3Z" />
      <path d="M13 5v14" strokeDasharray="2 3" />
    </>
  ),
}

/**
 * Icono SVG en trazo (estilo Lucide). `currentColor` hereda el color del texto.
 */
export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.8 }) {
  const content = paths[name]
  if (!content) return null

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {content}
    </svg>
  )
}
