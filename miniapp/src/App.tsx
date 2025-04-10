import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from './hooks/useUser'
import { useBackButton } from './hooks/useBackButton'
import { useApi } from './hooks/useApi'
import { api } from './api/client'
import Layout from './components/Layout'
import Skeleton from './components/Skeleton'
import ErrorState from './components/ErrorState'
import HomePage from './pages/HomePage'
import PlansPage from './pages/PlansPage'
import ServersPage from './pages/ServersPage'
import PaymentPage from './pages/PaymentPage'
import ProfilePage from './pages/ProfilePage'
import ReferralPage from './pages/ReferralPage'
import AdminPage from './pages/AdminPage'
import ConnectPage from './pages/ConnectPage'

export default function App() {
  const { data: user, loading, error, refetch } = useApi(() => api.getMe(), [])

  useBackButton()

  if (loading) {
    return (
      <Layout>
        <Skeleton variant="profile" />
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <ErrorState message={error} onRetry={refetch} />
      </Layout>
    )
  }

  return (
    <UserContext.Provider value={{ user, refetch }}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/plans/:planId/servers" element={<ServersPage />} />
          <Route path="/payment/:planId/:serverId" element={<PaymentPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/referral" element={<ReferralPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          {user?.is_admin && <Route path="/admin" element={<AdminPage />} />}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </UserContext.Provider>
  )
}
