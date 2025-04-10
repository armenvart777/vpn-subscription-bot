import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../api/client'
import { useApi } from '../hooks/useApi'
import ServerCard from '../components/ServerCard'
import Skeleton from '../components/Skeleton'
import ErrorState from '../components/ErrorState'

export default function ServersPage() {
  const { planId } = useParams()
  const { data: servers, loading, error, refetch } = useApi(() => api.getServers(), [])
  const navigate = useNavigate()

  if (loading) return <Skeleton variant="servers" />
  if (error) return <ErrorState message={error} onRetry={refetch} />

  return (
    <div className="page-content fade-in">
      <div className="gap-24">
        <div className="slide-up-1">
          <div className="page-header">{'\u0421\u0435\u0440\u0432\u0435\u0440\u044b'}</div>
          <div className="page-subtitle">
            {'\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f'}
          </div>
        </div>

        <div className="gap-12">
          {servers?.length === 0 && (
            <div className="card text-center text-secondary" style={{ padding: 48 }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{'\u{1F50D}'}</div>
              {'\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432'}
            </div>
          )}
          {servers?.map((server, i) => (
            <div key={server.id} className={`slide-up-${Math.min(i + 2, 5)}`}>
              <ServerCard
                server={server}
                onClick={() => {
                  window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('medium')
                  navigate(`/payment/${planId}/${server.id}`)
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
