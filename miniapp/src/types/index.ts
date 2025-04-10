export interface Subscription {
  id: number
  status: string
  vless_link: string
  expires_at: string
  data_used_bytes: number
  data_limit_bytes: number
  server_name: string
  server_country: string
  server_flag: string
  plan_name: string
  auto_renew: boolean
}

export interface User {
  id: number
  telegram_id: number
  username: string
  first_name: string
  balance: number
  is_admin: boolean
  ref_code: string
  subscription?: Subscription
}

export interface Plan {
  id: number
  name: string
  duration_days: number
  price_rub: number
  price_stars: number
  price_usdt: string
  data_limit_gb: number
  device_limit: number
}

export interface Server {
  id: number
  name: string
  country: string
  country_name: string
  flag: string
  current_users: number
  max_users: number
}

export interface Traffic {
  used_bytes: number
  limit_bytes: number
}

export interface Referral {
  ref_code: string
  ref_link: string
  count: number
  total_bonus: number
}

export interface AdminStats {
  total_users: number
  active_subs: number
  revenue_today: number
  revenue_this_month: number
  expiring_soon: number
}

export interface AdminUser {
  telegram_id: number
  username: string
  first_name: string
  balance: number
  has_active_sub: boolean
  sub_expires_at?: string
  created_at: string
}

export interface PaymentResult {
  payment_url?: string
  payment_id?: number
  method: string
}
