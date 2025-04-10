import type { Plan } from '../types'

interface Props {
  plan: Plan
  popular?: boolean
  onClick: () => void
}

export default function PlanCard({ plan, popular, onClick }: Props) {
  const pricePerMonth = plan.duration_days >= 30
    ? Math.round(plan.price_rub / (plan.duration_days / 30))
    : plan.price_rub

  return (
    <div className={`card plan-card ${popular ? 'popular' : ''}`} onClick={onClick}>
      {popular && <span className="plan-badge">{'\u0425\u0438\u0442'}</span>}

      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 15, fontWeight: 600 }}>{plan.name}</div>
        <div className="text-xs text-secondary">{plan.duration_days} {'\u0434\u043d.'}</div>
      </div>

      <div className="plan-price">
        {plan.price_rub} {'\u20BD'}
        {plan.duration_days > 30 && (
          <span className="plan-price-suffix"> ({pricePerMonth} {'\u20BD'}/{'\u043c\u0435\u0441'})</span>
        )}
      </div>

      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div className="text-xs text-secondary">
          {plan.data_limit_gb > 0 ? `${plan.data_limit_gb} GB` : '\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442'}
          {' \u2022 '}
          {plan.device_limit > 0 ? `${plan.device_limit} \u0443\u0441\u0442\u0440.` : '\u0411\u0435\u0437 \u043b\u0438\u043c\u0438\u0442\u0430'}
        </div>
      </div>
    </div>
  )
}
