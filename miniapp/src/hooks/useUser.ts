import { createContext, useContext } from 'react'
import type { User } from '../types'

export const UserContext = createContext<{
  user: User | null
  refetch: () => void
}>({ user: null, refetch: () => {} })

export function useUser() {
  return useContext(UserContext)
}
