import { useState } from 'react'
import { api } from '../api/client'
import { useApi } from '../hooks/useApi'
import StatBlock from '../components/StatBlock'
import Skeleton from '../components/Skeleton'
import ErrorState from '../components/ErrorState'

export default function ReferralPage() {
  const { data: ref, loading, error, refetch } = useApi(() => api.getReferral(), [])
  const [copied, setCopied] = useState(false)

  if (loading) return <Skeleton variant="profile" />
  if (error) return <ErrorState message={error} onRetry={refetch} />

  const handleCopy = async () => {
    if (!ref) return
    try {
      await navigator.clipboard.writeText(ref.ref_link)
      setCopied(true)
      window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred('success')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.Telegram?.WebApp?.showAlert(ref.ref_link)
    }
  }

  const handleShare = () => {
    if (!ref) return
    const text = encodeURIComponent('\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0439\u0441\u044f! \u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439 VPN')
    const url = encodeURIComponent(ref.ref_link)
    window.Telegram?.WebApp?.openLink(`https://t.me/share/url?url=${url}&text=${text}`)
  }

  return (
    <div className="page-content fade-in">
      <div className="gap-24">
        <div className="slide-up-1">
          <div className="hero">
            <div className="hero-content">
              <div style={{ fontSize: 36, marginBottom: 12 }}>{'\u{1F381}'}</div>
              <div className="page-header">{'\u0420\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430'}</div>
              <div className="page-subtitle">
                {'\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0439\u0442\u0435 \u0434\u0440\u0443\u0437\u0435\u0439 \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0431\u043e\u043d\u0443\u0441\u044b!'}
              </div>
            </div>
          </div>
        </div>

        <div className="slide-up-2 grid-2">
          <StatBlock value={ref?.count || 0} label={'\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u043e'} />
          <StatBlock value={`${(ref?.total_bonus || 0).toFixed(0)} \u20BD`} label={'\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e'} />
        </div>

        <div className="slide-up-3 gap-12">
          <div className="section-title">{'\u0412\u0430\u0448\u0430 \u0441\u0441\u044b\u043b\u043a\u0430'}</div>
          <div className="copy-box" onClick={handleCopy}>
            <span className="copy-text">{ref?.ref_link}</span>
            <span style={{
              color: copied ? 'var(--accent-green)' : 'var(--accent-purple)',
              fontSize: 13, fontWeight: 600, flexShrink: 0,
            }}>
              {copied ? '\u2713' : '\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c'}
            </span>
          </div>
          <button className="btn btn-primary" onClick={handleShare}>
            {'\u{1F4E4}'} {'\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f'}
          </button>
        </div>

        <div className="slide-up-4">
          <div className="card gap-16" style={{ gap: 20, display: 'flex', flexDirection: 'column' }}>
            <div className="section-title">{'\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442'}</div>
            {[
              { icon: '\u{1F517}', text: '\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438' },
              { icon: '\u{1F464}', text: '\u0414\u0440\u0443\u0433 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435' },
              { icon: '\u{1F4B0}', text: '\u041f\u043e\u0441\u043b\u0435 \u0435\u0433\u043e \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u0431\u043e\u043d\u0443\u0441' },
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-xs)',
                  background: 'var(--bg-elevated)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, flexShrink: 0,
                }}>
                  {step.icon}
                </div>
                <span className="text-sm text-secondary">{step.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
