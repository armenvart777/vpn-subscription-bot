import { useState } from 'react'
import { api } from '../api/client'
import { useApi } from '../hooks/useApi'
import StatBlock from '../components/StatBlock'
import Loader from '../components/Loader'

export default function AdminPage() {
  const { data: stats, loading: statsLoading } = useApi(() => api.getAdminStats(), [])
  const { data: usersData, loading: usersLoading } = useApi(() => api.getAdminUsers(0, 20), [])
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleBroadcast = async () => {
    if (!message.trim() || sending) return
    setSending(true)
    setResult(null)
    try {
      const res = await api.broadcast(message)
      setResult(`\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E: ${res.sent}, \u041E\u0448\u0438\u0431\u043E\u043A: ${res.failed}`)
      setMessage('')
      window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred('success')
    } catch (e) {
      setResult(`\u041E\u0448\u0438\u0431\u043A\u0430: ${e instanceof Error ? e.message : 'unknown'}`)
    } finally {
      setSending(false)
    }
  }

  if (statsLoading) return <Loader />

  return (
    <div className="page-content fade-in">
      <div className="gap-20">
        <div className="page-header slide-up-1">{'\u0410\u0434\u043c\u0438\u043d-\u043f\u0430\u043d\u0435\u043b\u044c'}</div>

        {/* Stats */}
        <div className="slide-up-2 grid-3">
          <StatBlock value={stats?.total_users || 0} label={'\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438'} />
          <StatBlock value={stats?.active_subs || 0} label={'\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438'} />
          <StatBlock value={stats?.expiring_soon || 0} label={'\u0418\u0441\u0442\u0435\u043a\u0430\u044e\u0442'} />
        </div>

        <div className="slide-up-3 grid-2">
          <StatBlock value={`${(stats?.revenue_today || 0).toFixed(0)} \u20BD`} label={'\u0421\u0435\u0433\u043e\u0434\u043d\u044f'} />
          <StatBlock value={`${(stats?.revenue_this_month || 0).toFixed(0)} \u20BD`} label={'\u0417\u0430 \u043c\u0435\u0441\u044f\u0446'} />
        </div>

        {/* Users */}
        <div className="slide-up-4">
          <div style={{ fontWeight: 600, marginBottom: 12 }}>
            {'\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438'} ({usersData?.total || 0})
          </div>
          {usersLoading ? <Loader /> : (
            <div className="gap-8">
              {usersData?.users.map((u) => (
                <div key={u.telegram_id} className="card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className={`status-dot ${u.has_active_sub ? 'active' : 'expired'}`} />
                  <div style={{ flex: 1 }}>
                    <div className="text-sm font-bold">
                      {u.username ? `@${u.username}` : u.first_name || `ID: ${u.telegram_id}`}
                    </div>
                    <div className="text-xs text-muted">{u.balance.toFixed(2)} {'\u20BD'}</div>
                  </div>
                  {u.sub_expires_at && (
                    <div className="text-xs text-secondary">
                      {'\u0434\u043e'} {new Date(u.sub_expires_at).toLocaleDateString('ru-RU')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Broadcast */}
        <div>
          <div style={{ fontWeight: 600, marginBottom: 12 }}>{'\u0420\u0430\u0441\u0441\u044b\u043b\u043a\u0430'}</div>
          <div className="gap-12">
            <textarea
              className="input"
              placeholder={'\u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f...'}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={handleBroadcast}
              disabled={!message.trim() || sending}
            >
              {sending ? '\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430...' : '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432\u0441\u0435\u043c'}
            </button>
            {result && (
              <div className="text-sm text-secondary text-center">{result}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
