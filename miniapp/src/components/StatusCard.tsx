import type { Subscription } from '../types'
import TrafficBar from './TrafficBar'

interface Props {
  subscription: Subscription
}

export default function StatusCard({ subscription }: Props) {
  const isActive = subscription.status === 'active'
  const expiresDate = new Date(subscription.expires_at)
  const daysLeft = Math.max(0, Math.ceil((expiresDate.getTime() - Date.now()) / 86400000))

  return (
    <div className={`card status-card ${isActive ? 'active' : 'expired'}`}>
      <div className="status-indicator">
        <span className={`status-dot ${isActive ? 'active' : 'expired'}`} />
        <span style={{ color: isActive ? 'var(--accent-green)' : 'var(--accent-red)' }}>
          {isActive ? '\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u0430' : '\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0438\u0441\u0442\u0435\u043a\u043b\u0430'}
        </span>
      </div>

      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className="text-secondary text-sm">{subscription.server_flag} {subscription.server_country}</span>
          <span className="text-secondary text-sm">{subscription.plan_name}</span>
        </div>

        {isActive && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span className="text-sm text-secondary">\u0418\u0441\u0442\u0435\u043a\u0430\u0435\u0442</span>
            <span className="font-bold">
              {expiresDate.toLocaleDateString('ru-RU')}
              <span className="text-secondary text-sm"> ({daysLeft} \u0434\u043d.)</span>
            </span>
          </div>
        )}
      </div>

      {isActive && subscription.data_limit_bytes > 0 && (
        <div style={{ marginTop: 16 }}>
          <TrafficBar
            used={subscription.data_used_bytes}
            limit={subscription.data_limit_bytes}
          />
        </div>
      )}
    </div>
  )
}
