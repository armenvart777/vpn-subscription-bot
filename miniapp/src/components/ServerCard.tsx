import type { Server } from '../types'

interface Props {
  server: Server
  onClick: () => void
}

export default function ServerCard({ server, onClick }: Props) {
  const loadPercent = server.max_users > 0
    ? Math.round((server.current_users / server.max_users) * 100)
    : 0

  const loadColor = loadPercent > 80
    ? 'var(--accent-red)'
    : loadPercent > 50
      ? 'var(--accent-amber)'
      : 'var(--accent-green)'

  return (
    <div className="card server-card" onClick={onClick}>
      <span className="server-flag">{server.flag}</span>

      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: 15 }}>{server.country_name}</div>
        <div className="text-xs text-secondary" style={{ marginTop: 2 }}>
          {server.current_users}/{server.max_users} {'\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439'}
        </div>
        <div className="server-load">
          <div
            className="server-load-fill"
            style={{ width: `${loadPercent}%`, background: loadColor }}
          />
        </div>
      </div>

      <span className="server-arrow">{'\u203A'}</span>
    </div>
  )
}
