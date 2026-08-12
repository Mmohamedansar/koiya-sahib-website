const STROKE_ICONS = {
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L7.9 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.9 2z" />
  ),
  location: (
    <>
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  quote: <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />,
  truck: (
    <>
      <rect x="1" y="7" width="15" height="11" />
      <path d="M16 10h4l3 3v5h-7z" />
      <circle cx="6" cy="20" r="2" />
      <circle cx="18" cy="20" r="2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  layers: (
    <>
      <path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.3 7l8.7 5 8.7-5M12 22V12" />
    </>
  ),
  users: (
    <>
      <path d="M3 21v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4" />
      <circle cx="9" cy="7" r="4" />
      <path d="M17 21v-2a4 4 0 0 0-3-3.87M14 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  arrowLeft: <path d="M15 18l-6-6 6-6" />,
  arrowRight: <path d="M9 18l6-6-6-6" />,
  camera: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
    </>
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  mail: (
    <>
      <path d="M4 4h16v16H4z" />
      <path d="M22 6l-10 7L2 6" />
    </>
  ),
  send: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />,
  target: (
    <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
  ),
  eye: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    </>
  ),
  bar: (
    <>
      <line x1="4" y1="20" x2="20" y2="4" />
      <circle cx="4" cy="20" r="1.6" fill="currentColor" />
      <circle cx="20" cy="4" r="1.6" fill="currentColor" />
    </>
  ),
  coil: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  pipe: (
    <>
      <rect x="2" y="9" width="20" height="6" rx="3" />
      <ellipse cx="4.5" cy="12" rx="2.5" ry="3" />
    </>
  ),
  angle: <path d="M4 4v16h16" />,
  plate: (
    <>
      <rect x="3" y="7" width="18" height="10" rx="1.5" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </>
  ),
  rack: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
    </>
  ),
  wire: <path d="M3 12h18M7 8l-2 4 2 4M12 8l-2 4 2 4M17 8l-2 4 2 4" />,
  mesh: <path d="M3 3l18 18M21 3L3 21M3 9l6-6M21 15l-6 6M15 3l6 6M3 15l6 6" />,
  net: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="3" y1="8" x2="21" y2="8" />
      <line x1="3" y1="13" x2="21" y2="13" />
      <line x1="3" y1="18" x2="21" y2="18" />
      <line x1="8" y1="3" x2="8" y2="21" />
      <line x1="16" y1="3" x2="16" y2="21" />
    </>
  ),
};

const FILLED_ICONS = {
  whatsapp: (
    <>
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10.1 9 9.6 7.8 9.4 7.3c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3c1.5.8 3.3 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.1.8.8-3-.2-.3C3.5 14.8 3 13.4 3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9.3z" />
    </>
  ),
};

export default function Icon({ name, className = "", size }) {
  const style = size ? { width: size, height: size } : undefined;
  if (FILLED_ICONS[name]) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
        {FILLED_ICONS[name]}
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {STROKE_ICONS[name]}
    </svg>
  );
}
