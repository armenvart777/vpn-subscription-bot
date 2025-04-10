interface Props {
  title?: string
  subtitle?: string
}

export default function SuccessOverlay({ title, subtitle }: Props) {
  return (
    <div className="success-overlay">
      <div className="success-circle">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path
            className="success-check"
            d="M10 18L16 24L26 12"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="success-title">{title || '\u0413\u043e\u0442\u043e\u0432\u043e!'}</div>
      {subtitle && <div className="success-subtitle">{subtitle}</div>}
    </div>
  )
}
