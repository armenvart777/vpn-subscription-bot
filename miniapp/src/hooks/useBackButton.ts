import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function useBackButton() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const bb = window.Telegram?.WebApp?.BackButton
    if (!bb) return

    const isHome = location.pathname === '/'

    if (isHome) {
      bb.hide()
    } else {
      bb.show()
    }

    const handler = () => navigate(-1)
    bb.onClick(handler)

    return () => {
      bb.offClick(handler)
    }
  }, [location.pathname, navigate])
}
