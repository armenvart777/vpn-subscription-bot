import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../api/client'
import { useApi } from '../hooks/useApi'
import { useUser } from '../hooks/useUser'
import Skeleton from '../components/Skeleton'
import ErrorState from '../components/ErrorState'
import SuccessOverlay from '../components/SuccessOverlay'

const methods = [
  {
    id: 'yukassa',
    icon: '\u{1F4B3}',
    name: '\u042EKassa',
    desc: '\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043a\u0430\u0440\u0442\u0430',
    color: '#6366f1',
  },
  {
    id: 'stars',
    icon: '\u2B50',
    name: 'Telegram Stars',
    desc: '\u041e\u043f\u043b\u0430\u0442\u0430 \u0437\u0432\u0451\u0437\u0434\u0430\u043c\u0438',
    color: '#fbbf24',
  },
  {
    id: 'cryptobot',
    icon: '\u{1F4B0}',
    name: '\u041a\u0440\u0438\u043f\u0442\u043e (USDT)',
    desc: 'CryptoBot',
    color: '#34d399',
  },
]

export default function PaymentPage() {
  const { planId, serverId } = useParams()
  const { data: plans, loading, error, refetch: refetchPlans } = useApi(() => api.getPlans(), [])
  const { refetch } = useUser()
  const navigate = useNavigate()
  const [paying, setPaying] = useState(false)
  const [success, setSuccess] = useState(false)

  const plan = plans?.find(p => p.id === Number(planId))

  if (loading) return <Skeleton variant="servers" />
  if (error) return <ErrorState message={error} onRetry={refetchPlans} />

  const handlePay = async (method: string) => {
    if (paying) return
    setPaying(true)
    window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('heavy')

    try {
      const result = await api.createPayment(method, Number(planId), Number(serverId))

      if (result.payment_url) {
        window.Telegram?.WebApp?.openLink(result.payment_url)
      } else if (method === 'stars') {
        window.Telegram?.WebApp?.showAlert(
          '\u041e\u043f\u043b\u0430\u0442\u0430 Stars \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u0431\u043e\u0442. \u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0447\u0430\u0442 \u0441 \u0431\u043e\u0442\u043e\u043c.'
        )
      }

      setSuccess(true)
      window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred('success')

      setTimeout(() => {
        refetch()
        navigate('/')
      }, 2000)
    } catch (e) {
      window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred('error')
      window.Telegram?.WebApp?.showAlert(
        `\u041e\u0448\u0438\u0431\u043a\u0430: ${e instanceof Error ? e.message : '\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435'}`
      )
    } finally {
      setPaying(false)
    }
  }

  return (
    <>
      {success && (
        <SuccessOverlay
          title={'\u041e\u043f\u043b\u0430\u0442\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430!'}
          subtitle={'\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f'}
        />
      )}

      <div className="page-content fade-in">
        <div className="gap-24">
          <div className="slide-up-1">
            <div className="page-header">{'\u041e\u043f\u043b\u0430\u0442\u0430'}</div>
            {plan && (
              <div className="page-subtitle">
                {plan.name} {'\u2014'} {plan.price_rub} {'\u20BD'}
              </div>
            )}
          </div>

          <div className="gap-12">
            {methods.map((m, i) => (
              <div
                key={m.id}
                className={`card payment-card slide-up-${i + 2}`}
                onClick={() => handlePay(m.id)}
                style={{ opacity: paying ? 0.5 : 1, pointerEvents: paying ? 'none' : 'auto' }}
              >
                <div className="payment-icon" style={{ background: m.color + '18' }}>
                  {m.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>{m.name}</div>
                  <div className="text-xs text-secondary">{m.desc}</div>
                </div>
                <span className="server-arrow">{'\u203A'}</span>
              </div>
            ))}
          </div>

          {paying && (
            <div className="slide-up text-center text-secondary text-sm" style={{ padding: 20 }}>
              <div className="spinner" style={{ margin: '0 auto 12px' }} />
              {'\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0430...'}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
