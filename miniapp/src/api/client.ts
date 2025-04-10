const API_BASE = '/api'

function getInitData(): string {
  return window.Telegram?.WebApp?.initData || ''
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Authorization': `tma ${getInitData()}`,
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Unknown error' }))
    throw new Error(err.error || `HTTP ${res.status}`)
  }

  return res.json()
}

export const api = {
  getMe: () => request<import('../types').User>('/me'),

  getPlans: () => request<{ plans: import('../types').Plan[] }>('/plans').then(r => r.plans),

  getServers: () => request<{ servers: import('../types').Server[] }>('/servers').then(r => r.servers),

  getSubscription: () => request<{ subscription: import('../types').Subscription | null }>('/subscription').then(r => r.subscription),

  getTraffic: () => request<import('../types').Traffic>('/traffic'),

  createPayment: (method: string, planId: number, serverId: number) =>
    request<import('../types').PaymentResult>('/payment', {
      method: 'POST',
      body: JSON.stringify({ method, plan_id: planId, server_id: serverId }),
    }),

  getReferral: () => request<import('../types').Referral>('/referral'),

  getAdminStats: () => request<import('../types').AdminStats>('/admin/stats'),

  getAdminUsers: (offset = 0, limit = 20) =>
    request<{ users: import('../types').AdminUser[]; total: number }>(`/admin/users?offset=${offset}&limit=${limit}`),

  broadcast: (message: string) =>
    request<{ sent: number; failed: number }>('/admin/broadcast', {
      method: 'POST',
      body: JSON.stringify({ message }),
    }),
}
