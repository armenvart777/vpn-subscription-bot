import { useLocation, useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'

const tabs = [
  { path: '/', icon: '\u{1F3E0}', label: '\u0413\u043b\u0430\u0432\u043d\u0430\u044f' },
  { path: '/plans', icon: '\u{1F4E6}', label: '\u0422\u0430\u0440\u0438\u0444\u044b' },
  { path: '/profile', icon: '\u{1F464}', label: '\u041f\u0440\u043e\u0444\u0438\u043b\u044c' },
  { path: '/referral', icon: '\u{1F381}', label: '\u0411\u043e\u043d\u0443\u0441\u044b' },
]

export default function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useUser()

  const allTabs = user?.is_admin
    ? [...tabs, { path: '/admin', icon: '\u{1F6E0}\uFE0F', label: '\u0410\u0434\u043c\u0438\u043d' }]
    : tabs

  return (
    <nav className="bottom-nav">
      {allTabs.map((tab) => {
        const isActive = tab.path === '/'
          ? location.pathname === '/'
          : location.pathname.startsWith(tab.path)

        return (
          <div
            key={tab.path}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => {
              if (!isActive) {
                navigate(tab.path)
                window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('light')
              }
            }}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </div>
        )
      })}
    </nav>
  )
}
