import { ReactNode } from 'react'
import BottomNav from './BottomNav'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="page">
      {children}
      <BottomNav />
    </div>
  )
}
