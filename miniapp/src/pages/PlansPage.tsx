import { useNavigate } from 'react-router-dom'
import { api } from '../api/client'
import { useApi } from '../hooks/useApi'
import PlanCard from '../components/PlanCard'
import Skeleton from '../components/Skeleton'
import ErrorState from '../components/ErrorState'

export default function PlansPage() {
  const { data: plans, loading, error, refetch } = useApi(() => api.getPlans(), [])
  const navigate = useNavigate()

  if (loading) return <Skeleton variant="plans" />
  if (error) return <ErrorState message={error} onRetry={refetch} />

  return (
    <div className="page-content fade-in">
      <div className="gap-24">
        <div className="slide-up-1">
          <div className="page-header">{'\u0422\u0430\u0440\u0438\u0444\u044b'}</div>
          <div className="page-subtitle">
            {'\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u043f\u043b\u0430\u043d \u0434\u043b\u044f \u0432\u0430\u0441'}
          </div>
        </div>

        <div className="grid-2">
          {plans?.map((plan, i) => (
            <div key={plan.id} className={`slide-up-${Math.min(i + 2, 5)}`}>
              <PlanCard
                plan={plan}
                popular={i === 1}
                onClick={() => {
                  window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('medium')
                  navigate(`/plans/${plan.id}/servers`)
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
