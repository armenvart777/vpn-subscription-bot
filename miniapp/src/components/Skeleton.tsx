interface SkeletonProps {
  variant?: 'card' | 'profile' | 'plans' | 'servers' | 'text'
}

function SkeletonLine({ width = '100%' }: { width?: string }) {
  return <div className="skeleton skeleton-text" style={{ width }} />
}

function SkeletonCard() {
  return (
    <div className="card" style={{ padding: 24 }}>
      <SkeletonLine width="30%" />
      <div style={{ height: 8 }} />
      <SkeletonLine width="70%" />
      <div style={{ height: 16 }} />
      <SkeletonLine width="50%" />
    </div>
  )
}

function SkeletonProfile() {
  return (
    <div className="gap-24">
      <div className="card" style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div className="skeleton skeleton-circle" style={{ width: 56, height: 56, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <SkeletonLine width="50%" />
            <SkeletonLine width="30%" />
          </div>
        </div>
        <div style={{ height: 16 }} />
        <div className="skeleton" style={{ height: 48, borderRadius: 'var(--radius-xs)' }} />
      </div>
      <SkeletonCard />
    </div>
  )
}

function SkeletonPlans() {
  return (
    <div className="gap-24">
      <div>
        <div className="skeleton skeleton-text" style={{ width: '35%', height: 26 }} />
        <div style={{ height: 8 }} />
        <SkeletonLine width="55%" />
      </div>
      <div className="grid-2">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="skeleton" style={{ height: 160, borderRadius: 'var(--radius)' }} />
        ))}
      </div>
    </div>
  )
}

function SkeletonServers() {
  return (
    <div className="gap-24">
      <div>
        <div className="skeleton skeleton-text" style={{ width: '30%', height: 26 }} />
        <div style={{ height: 8 }} />
        <SkeletonLine width="60%" />
      </div>
      <div className="gap-12">
        {[1, 2, 3].map(i => (
          <div key={i} className="card" style={{ padding: 20 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <div className="skeleton" style={{ width: 48, height: 48, borderRadius: 'var(--radius-xs)' }} />
              <div style={{ flex: 1 }}>
                <SkeletonLine width="50%" />
                <SkeletonLine width="35%" />
                <div className="skeleton" style={{ height: 4, borderRadius: 2, marginTop: 4 }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skeleton({ variant = 'card' }: SkeletonProps) {
  return (
    <div className="page-content fade-in">
      {variant === 'profile' && <SkeletonProfile />}
      {variant === 'plans' && <SkeletonPlans />}
      {variant === 'servers' && <SkeletonServers />}
      {variant === 'card' && <SkeletonCard />}
      {variant === 'text' && (
        <div className="gap-12">
          <SkeletonLine width="80%" />
          <SkeletonLine width="60%" />
          <SkeletonLine width="70%" />
        </div>
      )}
    </div>
  )
}
