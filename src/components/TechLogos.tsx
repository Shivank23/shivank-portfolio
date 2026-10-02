import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({
  name,
  className = 'w-4 h-4 shrink-0',
}) => {
  switch (name) {
    case 'React.js':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="2.2" fill="#00D8FF" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            stroke="#00D8FF"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            transform="rotate(60 12 12)"
            stroke="#00D8FF"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            transform="rotate(120 12 12)"
            stroke="#00D8FF"
            strokeWidth="1.5"
          />
        </svg>
      );

    case 'Next.js 14':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#0F172A" />
          <path
            d="M8.5 16V8L16.5 18.2"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 8V13"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'TypeScript':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
          <path
            d="M7 11H12M9.5 11V18M17.5 12.2C17 11.5 16.2 11.2 15.2 11.2C14 11.2 13.3 11.8 13.3 12.6C13.3 13.4 14 13.8 15.3 14.2C16.8 14.7 17.7 15.3 17.7 16.5C17.7 17.7 16.6 18.4 15.1 18.4C13.9 18.4 13 18 12.5 17.2"
            stroke="white"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'JavaScript (ES6+)':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E" />
          <path
            d="M10.5 11V16.2C10.5 17.4 9.7 18 8.6 18C7.7 18 7.1 17.5 6.8 16.8M17.5 12.2C17 11.5 16.3 11.2 15.4 11.2C14.3 11.2 13.6 11.8 13.6 12.5C13.6 13.3 14.3 13.7 15.5 14.1C16.9 14.6 17.7 15.2 17.7 16.4C17.7 17.6 16.7 18.2 15.2 18.2C14 18.2 13.2 17.7 12.7 16.9"
            stroke="#0F172A"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'Modern HTML5/CSS3':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M4 3H20L18.5 19L12 21L5.5 19L4 3Z"
            fill="#E34F26"
          />
          <path
            d="M12 4.5V19.3L17.2 17.8L18.4 4.5H12Z"
            fill="#EF652A"
          />
          <path
            d="M7.5 7.5H16.5L16.2 10.5H9.8L10 13H16L15.5 17L12 18L8.5 17L8.3 14.8"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'Redux Toolkit (RTK)':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M15.5 15.5C18.5 15.5 20.5 13.8 20.5 11.5C20.5 9 17.5 7 13.5 7C9.5 7 6.5 9.2 6.5 12"
            stroke="#764ABC"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M8.5 9.5C6.2 11.2 5.5 13.8 6.8 15.8C8.2 17.8 11.8 18 15.2 16"
            stroke="#764ABC"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M15.5 9.5C16.8 6.8 15.8 4.2 13.5 3.5C11 2.8 8.2 5 7.2 8.5"
            stroke="#764ABC"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="13.5" cy="7" r="1.5" fill="#764ABC" />
          <circle cx="8.5" cy="15.5" r="1.5" fill="#764ABC" />
          <circle cx="15.5" cy="15.5" r="1.5" fill="#764ABC" />
        </svg>
      );

    case 'TanStack Query':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="9.5" fill="#FF4154" fillOpacity="0.15" stroke="#FF4154" strokeWidth="1.6" />
          <path
            d="M13 6L8 13H12.5L11 18L16 11H11.5L13 6Z"
            fill="#FF4154"
            stroke="#FF4154"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'RESTful APIs':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="4" width="7" height="6" rx="1.5" stroke="#059669" strokeWidth="1.7" />
          <rect x="14" y="14" width="7" height="6" rx="1.5" stroke="#2563EB" strokeWidth="1.7" />
          <path
            d="M10 7H15C16.1 7 17 7.9 17 9V14M14 17H9C7.9 17 7 16.1 7 15V10"
            stroke="#475569"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'Axios Interceptors':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M9 18V6L4 11M15 6V18L20 13"
            stroke="#5A29E4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'Web Workers':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="9" cy="9" r="3.5" stroke="#2563EB" strokeWidth="1.7" />
          <circle cx="16" cy="15" r="3.5" stroke="#475569" strokeWidth="1.7" />
          <path
            d="M9 3.5V5.5M9 12.5V14.5M3.5 9H5.5M12.5 9H14.5M16 9.5V11.5M16 18.5V20.5M10.5 15H12.5M19.5 15H21.5"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.8 9.24 12.41 9.85C13.4 10.85 14.55 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.2 8.76 16.59 8.15C15.6 7.15 14.45 6 12 6ZM7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.8 15.24 7.41 15.85C8.4 16.85 9.55 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.2 14.76 11.59 14.15C10.6 13.15 9.45 12 7 12Z"
            fill="#06B6D4"
          />
        </svg>
      );

    case 'Material UI (MUI)':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M3 15V6L9 9.5L15 6V15L9 18.5L3 15Z"
            stroke="#007FFF"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M15 9.5L21 6V15L15 18.5"
            stroke="#007FFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'Ant Design':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 2.5L3 12L12 21.5L18 15.2"
            stroke="#1677FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 6.2L21 12L15.5 17.8"
            stroke="#F5222D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="2.2" fill="#1677FF" />
        </svg>
      );

    case 'Headless UI':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="3" width="8" height="8" rx="2" fill="#4F46E5" />
          <rect x="13" y="3" width="8" height="8" rx="2" fill="#06B6D4" />
          <rect x="3" y="13" width="8" height="8" rx="2" fill="#06B6D4" />
          <rect x="13" y="13" width="8" height="8" rx="2" fill="#4F46E5" />
        </svg>
      );

    case 'WCAG Accessibility':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="9.5" stroke="#059669" strokeWidth="1.6" />
          <circle cx="12" cy="7.5" r="1.5" fill="#059669" />
          <path
            d="M7.5 10.5H16.5M12 10.5V14.5M12 14.5L9.5 18M12 14.5L14.5 18"
            stroke="#059669"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'Jest':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="9.5" fill="#C21325" fillOpacity="0.12" stroke="#C21325" strokeWidth="1.6" />
          <path
            d="M8.5 14.5C8.5 16.5 10 17.5 12 17.5C14 17.5 15.5 16 15.5 13.5V7.5H11"
            stroke="#C21325"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'React Testing Library (RTL)':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 4C8.5 4 6 6.5 6 10C6 12.5 7 14 8 15L7 19H10L11 16H13L14 19H17L16 15C17 14 18 12.5 18 10C18 6.5 15.5 4 12 4Z"
            fill="#E33332"
            fillOpacity="0.18"
            stroke="#E33332"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="10" r="1.2" fill="#E33332" />
          <circle cx="14" cy="10" r="1.2" fill="#E33332" />
        </svg>
      );

    case 'Automated CI Gates':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="6" cy="6" r="2.5" stroke="#2563EB" strokeWidth="1.7" />
          <circle cx="18" cy="6" r="2.5" stroke="#2563EB" strokeWidth="1.7" />
          <circle cx="12" cy="18" r="2.5" stroke="#059669" strokeWidth="1.7" />
          <path
            d="M6 8.5V11C6 12.7 7.3 14 9 14H15C16.7 14 18 12.7 18 11V8.5M12 14V15.5"
            stroke="#475569"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'SonarQube Gates':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M4 18C4 13.5 7.5 10 12 10C16.5 10 20 13.5 20 18"
            stroke="#4E9BCD"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7 18C7 15.2 9.2 13 12 13C14.8 13 17 15.2 17 18"
            stroke="#4E9BCD"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="18" r="2" fill="#2563EB" />
          <path d="M12 5V8M18 7L16 9M6 7L8 9" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'Husky Pre-commits':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M5 12L10 17L19 7"
            stroke="#0F172A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="#64748B" strokeWidth="1.5" />
        </svg>
      );

    case 'Unit & Integration Testing':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 3L4 6.5V12C4 16.8 7.4 20.8 12 22C16.6 20.8 20 16.8 20 12V6.5L12 3Z"
            fill="#059669"
            fillOpacity="0.12"
            stroke="#059669"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 12.5L11 15L15.5 9.5"
            stroke="#059669"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'Supabase':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M13.5 2.5L4.5 13.5H12L10.5 21.5L19.5 10.5H12L13.5 2.5Z"
            fill="#3ECF8E"
            stroke="#10B981"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'Node.js':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 2.5L20 7V17L12 21.5L4 17V7L12 2.5Z"
            fill="#339933"
          />
          <path
            d="M9.5 15V9L14.5 15V9"
            stroke="white"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'Express.js':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="2" y="4" width="20" height="16" rx="3" fill="#0F172A" />
          <path
            d="M6 9H10.5M6 12H9.5M6 15H10.5M6 9V15M13.5 9L18 15M18 9L13.5 15"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'MongoDB':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 2.5C12 2.5 6.5 7 6.5 13C6.5 17.2 9.5 20 12 21V2.5Z"
            fill="#47A248"
          />
          <path
            d="M12 2.5C12 2.5 17.5 7 17.5 13C17.5 17.2 14.5 20 12 21V2.5Z"
            fill="#3F8E40"
          />
          <path d="M12 19V22.5" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'MSSQL Relational Schemas':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <ellipse cx="12" cy="6" rx="7.5" ry="3" fill="#2563EB" fillOpacity="0.2" stroke="#2563EB" strokeWidth="1.6" />
          <path
            d="M4.5 6V12C4.5 13.7 7.9 15 12 15C16.1 15 19.5 13.7 19.5 12V6"
            stroke="#2563EB"
            strokeWidth="1.6"
          />
          <path
            d="M4.5 12V18C4.5 19.7 7.9 21 12 21C16.1 21 19.5 19.7 19.5 18V12"
            stroke="#1E3A8A"
            strokeWidth="1.6"
          />
        </svg>
      );

    case 'REST & GraphQL APIs':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 3L19.8 7.5V16.5L12 21L4.2 16.5V7.5L12 3Z"
            stroke="#E10098"
            strokeWidth="1.6"
          />
          <path
            d="M12 3L19.8 16.5H4.2L12 3Z"
            stroke="#E10098"
            strokeWidth="1.3"
          />
          <circle cx="12" cy="3" r="1.6" fill="#E10098" />
          <circle cx="19.8" cy="7.5" r="1.6" fill="#E10098" />
          <circle cx="19.8" cy="16.5" r="1.6" fill="#E10098" />
          <circle cx="12" cy="21" r="1.6" fill="#E10098" />
          <circle cx="4.2" cy="16.5" r="1.6" fill="#E10098" />
          <circle cx="4.2" cy="7.5" r="1.6" fill="#E10098" />
        </svg>
      );

    case 'Model Context Protocol (MCP)':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#EFF6FF" stroke="#1E3A8A" strokeWidth="1.6" />
          <circle cx="8.5" cy="8.5" r="2" fill="#1E3A8A" />
          <circle cx="15.5" cy="8.5" r="2" fill="#2563EB" />
          <circle cx="12" cy="15.5" r="2" fill="#1E3A8A" />
          <path
            d="M10 9.5L12 14M14 9.5L12 14M9.5 8.5H14.5"
            stroke="#1E3A8A"
            strokeWidth="1.5"
          />
        </svg>
      );

    case 'Claude (Anthropic)':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="9.5" fill="#D97757" fillOpacity="0.15" />
          <path
            d="M12 4V20M4 12H20M6.3 6.3L17.7 17.7M17.7 6.3L6.3 17.7"
            stroke="#D97757"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'Google Antigravity':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 2.5L14.6 9.4L21.5 12L14.6 14.6L12 21.5L9.4 14.6L2.5 12L9.4 9.4L12 2.5Z"
            fill="#2563EB"
          />
          <circle cx="12" cy="12" r="2.2" fill="white" />
        </svg>
      );

    case 'Cursor IDE':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#0F172A" />
          <path
            d="M7 6.5L17.5 11.5L12.5 13.2L10.8 18.2L7 6.5Z"
            fill="white"
          />
        </svg>
      );

    case 'GitHub Copilot':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="6" width="18" height="13" rx="6" fill="#0F172A" />
          <rect x="6.5" y="10" width="4.5" height="3.5" rx="1.5" fill="#38BDF8" />
          <rect x="13" y="10" width="4.5" height="3.5" rx="1.5" fill="#38BDF8" />
          <path d="M8 6V4.5C8 3.7 8.7 3 9.5 3H14.5C15.3 3 16 3.7 16 4.5V6" stroke="#0F172A" strokeWidth="1.6" />
        </svg>
      );

    default:
      return (
        <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] shrink-0" />
      );
  }
};
