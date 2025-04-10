import { useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import StatusCard from '../components/StatusCard'

export default function HomePage() {
  const { user } = useUser()
  const navigate = useNavigate()
  const sub = user?.subscription

  return (
    <div className="page-content fade-in">
      <div className="gap-24">
        {/* Hero Section */}
        <div className="slide-up-1">
          <div className="hero">
            <div className="hero-content">
              <div style={{ fontSize: 36, marginBottom: 12 }}>{'\u{1F6E1}\uFE0F'}</div>
              <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.3px' }}>
                {'\u041f\u0440\u0438\u0432\u0435\u0442, '}{user?.first_name || 'VPN'}
              </div>
              <div className="text-secondary" style={{ marginTop: 6, fontSize: 14, lineHeight: 1.5 }}>
                {'\u0412\u0430\u0448 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442'}
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Status */}
        <div className="slide-up-2">
          {sub ? (
            <StatusCard subscription={sub} />
          ) : (
            <div className="card status-card expired">
              <div className="status-indicator">
                <span className="status-dot expired" />
                <span style={{ color: 'var(--accent-red)' }}>
                  {'\u041d\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438'}
                </span>
              </div>
              <div className="text-secondary text-sm" style={{ marginTop: 12 }}>
                {'\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 VPN \u0434\u043b\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430'}
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="slide-up-3 gap-12">
          {sub?.status === 'active' ? (
            <>
              <button className="btn btn-primary" onClick={() => navigate('/profile')}>
                {'\u{1F511}'} {'\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c VPN-\u043a\u043b\u044e\u0447'}
              </button>
              <button className="btn btn-outline" onClick={() => navigate('/plans')}>
                {'\u{1F504}'} {'\u041f\u0440\u043e\u0434\u043b\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443'}
              </button>
            </>
          ) : (
            <button className="btn btn-green" onClick={() => navigate('/plans')}>
              {'\u26A1'} {'\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c VPN'}
            </button>
          )}
        </div>

        {/* Features */}
        <div className="slide-up-4">
          <div className="section-title" style={{ marginBottom: 14 }}>
            {'\u041f\u043e\u0447\u0435\u043c\u0443 \u043c\u044b'}
          </div>
          <div className="grid-3">
            <div className="feature-card">
              <span className="feature-icon">{'\u{1F512}'}</span>
              <div className="text-xs text-secondary">{'\u0428\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435'}</div>
            </div>
            <div className="feature-card">
              <span className="feature-icon">{'\u26A1'}</span>
              <div className="text-xs text-secondary">{'\u0411\u044b\u0441\u0442\u0440\u044b\u0439'}</div>
            </div>
            <div className="feature-card">
              <span className="feature-icon">{'\u{1F30D}'}</span>
              <div className="text-xs text-secondary">{'\u0411\u0435\u0437 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
