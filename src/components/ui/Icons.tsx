type IconProps = {
  className?: string;
};

export function ZaloIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#0068FF" />
      <text
        x="24"
        y="28"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fontFamily="Inter, Arial, sans-serif"
        fill="white"
      >
        Zalo
      </text>
    </svg>
  );
}

export function MessengerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="messengerFlat" x1="8" y1="8" x2="40" y2="40">
          <stop offset="0%" stopColor="#1ec8ff" />
          <stop offset="50%" stopColor="#5b5cff" />
          <stop offset="100%" stopColor="#ff4db8" />
        </linearGradient>
      </defs>

      <path
        d="M24 4C13.3 4 4.5 12.2 4.5 22.4c0 5.2 2.5 9.8 6.6 13V44l6.5-3.7c2 .6 4.1.9 6.4.9 10.7 0 19.5-8.2 19.5-18.8C43.5 12.2 34.7 4 24 4Z"
        fill="url(#messengerFlat)"
      />

      <path
        d="M11.8 28.2L20.6 19.6C21.1 19.1 21.9 19.1 22.4 19.6L26.8 23.2C27.3 23.6 28 23.6 28.5 23.2L36.2 17.4L28.2 28.8C27.7 29.5 26.8 29.7 26.1 29.1L21.8 25.8C21.3 25.4 20.6 25.4 20.1 25.8L11.8 28.2Z"
        fill="white"
      />
    </svg>
  );
}

export function BookingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <g transform="translate(0, 1)">
        {/* outer calendar */}
        <rect
          x="3"
          y="5"
          width="18"
          height="16"
          rx="3"
          stroke="#FFFFFF"
          strokeWidth="2"
        />

        {/* top rings */}
        <path
          d="M8 3V6"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 3V6"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* divider */}
        <path
          d="M3 9H21"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
