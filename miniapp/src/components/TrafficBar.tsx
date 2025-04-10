interface Props {
  used: number
  limit: number
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 GB'
  const gb = bytes / (1024 * 1024 * 1024)
  if (gb >= 1) return `${gb.toFixed(1)} GB`
  const mb = bytes / (1024 * 1024)
  return `${mb.toFixed(0)} MB`
}

export default function TrafficBar({ used, limit }: Props) {
  const percent = limit > 0 ? Math.min(100, (used / limit) * 100) : 0
  const isWarning = percent > 80

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span className="text-xs text-secondary">{'\u0422\u0440\u0430\u0444\u0438\u043a'}</span>
        <span className="text-xs text-secondary">
          {formatBytes(used)} / {limit > 0 ? formatBytes(limit) : '\u221e'}
        </span>
      </div>
      <div className="traffic-bar">
        <div
          className={`traffic-fill ${isWarning ? 'warning' : ''}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
