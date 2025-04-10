import { useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { useApi } from '../hooks/useApi'
import { api } from '../api/client'
import StatusCard from '../components/StatusCard'
import TrafficBar from '../components/TrafficBar'
import VPNKey from '../components/VPNKey'
import Skeleton from '../components/Skeleton'

export default function ProfilePage() {
  const { user } = useUser()
  const navigate = useNavigate()
  const sub = user?.subscription
  const { data: traffic, loading: trafficLoading } = useApi(
    () => api.getTraffic(),
    [],
  )

  if (!user) return <Skeleton variant="profile" />

  return (
    <div className="page-content fade-in">
      <div className="gap-24">
        {/* Profile Header */}
        <div className="slide-up-1">
          <div className="card" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'var(--gradient-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, fontWeight: 700,
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.25)',
              }}>
                {(user.first_name?.[0] || 'U').toUpperCase()}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18 }}>{user.first_name}</div>
                <div className="text-sm text-secondary">
                  {user.username ? `@${user.username}` : `ID: ${user.telegram_id}`}
                </div>
              </div>
            </div>
            <div style={{
              marginTop: 20, padding: '14px 18px',
              background: 'rgba(0,0,0,0.25)', borderRadius: 'var(--radius-xs)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span className="text-sm text-secondary">{'\u0411\u0430\u043b\u0430\u043d\u0441'}</span>
              <span className="font-bold" style={{ fontSize: 16 }}>{user.balance?.toFixed(2)} {'\u20BD'}</span>
            </div>
          </div>
        </div>

        {/* Subscription */}
        {sub && (
          <div className="slide-up-2">
            <StatusCard subscription={sub} />
          </div>
        )}

        {/* Real-time Traffic */}
        {sub?.status === 'active' && (
          <div className="slide-up-3">
            <div className="card">
              <div className="section-title" style={{ marginBottom: 14 }}>
                {'\u{1F4CA}'} {'\u0422\u0440\u0430\u0444\u0438\u043a'}
              </div>
              {trafficLoading ? (
                <div className="skeleton" style={{ height: 8, borderRadius: 4 }} />
              ) : (
                <TrafficBar
                  used={traffic?.used_bytes || sub.data_used_bytes}
                  limit={traffic?.limit_bytes || sub.data_limit_bytes}
                />
              )}
            </div>
          </div>
        )}

        {/* VPN Key */}
        {sub?.status === 'active' && sub.vless_link && (
          <div className="slide-up-4">
            <div className="section-title" style={{ marginBottom: 14 }}>
              {'\u{1F511}'} VPN-{'\u043a\u043b\u044e\u0447'}
            </div>
            <VPNKey vlessLink={sub.vless_link} />
          </div>
        )}

        {/* Connection Instructions Link */}
        {sub?.status === 'active' && (
          <div className="slide-up-5">
            <button className="btn btn-outline" onClick={() => navigate('/connect')}>
              {'\u{1F4F1}'} {'\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044e'}
            </button>
          </div>
        )}

        {/* No subscription */}
        {!sub && (
          <div className="slide-up-2">
            <div className="card text-center" style={{ padding: 48 }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>{'\u{1F6E1}\uFE0F'}</div>
              <div className="text-secondary" style={{ fontSize: 15 }}>
                {'\u041d\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438'}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
