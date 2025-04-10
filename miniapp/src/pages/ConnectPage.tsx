import { useState } from 'react'

const platforms = [
  {
    id: 'ios',
    icon: '\u{1F34E}',
    name: 'iOS',
    apps: [
      { name: 'V2Box', url: 'https://apps.apple.com/app/v2box-v2ray-client/id6446814690' },
      { name: 'Streisand', url: 'https://apps.apple.com/app/streisand/id6450534064' },
    ],
    steps: [
      '\u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u0437 App Store',
      '\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u041f\u0440\u043e\u0444\u0438\u043b\u044c \u2192 VPN-\u043a\u043b\u044e\u0447',
      '\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u00ab\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u00bb \u0438\u043b\u0438 \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 QR',
      '\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043b\u044e\u0447 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u0441\u044c',
    ],
  },
  {
    id: 'android',
    icon: '\u{1F916}',
    name: 'Android',
    apps: [
      { name: 'V2rayNG', url: 'https://play.google.com/store/apps/details?id=com.v2ray.ang' },
      { name: 'Hiddify', url: 'https://play.google.com/store/apps/details?id=app.hiddify.com' },
    ],
    steps: [
      '\u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u0437 Google Play',
      '\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u041f\u0440\u043e\u0444\u0438\u043b\u044c \u2192 VPN-\u043a\u043b\u044e\u0447',
      '\u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u043a\u043b\u044e\u0447 \u0438\u043b\u0438 \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 QR',
      '\u0412 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438: + \u2192 \u0418\u043c\u043f\u043e\u0440\u0442 \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u2192 \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c',
    ],
  },
  {
    id: 'windows',
    icon: '\u{1F4BB}',
    name: 'Windows',
    apps: [
      { name: 'Hiddify', url: 'https://github.com/hiddify/hiddify-app/releases' },
      { name: 'Nekoray', url: 'https://github.com/MatsuriDayo/nekoray/releases' },
    ],
    steps: [
      '\u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435',
      '\u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 VPN-\u043a\u043b\u044e\u0447 \u0438\u0437 \u041f\u0440\u043e\u0444\u0438\u043b\u044f',
      '\u0412 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438: \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u2192 \u0418\u0437 \u0431\u0443\u0444\u0435\u0440\u0430',
      '\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u00ab\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u00bb',
    ],
  },
  {
    id: 'macos',
    icon: '\u{1F5A5}\uFE0F',
    name: 'macOS',
    apps: [
      { name: 'V2Box', url: 'https://apps.apple.com/app/v2box-v2ray-client/id6446814690' },
      { name: 'Hiddify', url: 'https://github.com/hiddify/hiddify-app/releases' },
    ],
    steps: [
      '\u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u0437 App Store \u0438\u043b\u0438 GitHub',
      '\u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 VPN-\u043a\u043b\u044e\u0447 \u0438\u0437 \u041f\u0440\u043e\u0444\u0438\u043b\u044f',
      '\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0447\u0435\u0440\u0435\u0437 \u0438\u043c\u043f\u043e\u0440\u0442 \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430',
      '\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u0441\u044c',
    ],
  },
]

export default function ConnectPage() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="page-content fade-in">
      <div className="gap-24">
        <div className="slide-up-1">
          <div className="page-header">{'\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435'}</div>
          <div className="page-subtitle">
            {'\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443'}
          </div>
        </div>

        <div className="gap-12">
          {platforms.map((p, idx) => (
            <div key={p.id} className={`slide-up-${Math.min(idx + 2, 5)}`}>
              <div
                className="card"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setActive(active === p.id ? null : p.id)
                  window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('light')
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 'var(--radius-xs)',
                    background: 'var(--bg-elevated)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22,
                  }}>
                    {p.icon}
                  </div>
                  <div style={{ flex: 1, fontWeight: 600, fontSize: 16 }}>{p.name}</div>
                  <span style={{
                    color: 'var(--text-muted)', fontSize: 18,
                    transform: active === p.id ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                  }}>{'\u203A'}</span>
                </div>

                {active === p.id && (
                  <div className="slide-up" style={{ marginTop: 20 }}>
                    {/* Apps */}
                    <div className="section-title" style={{ fontSize: 14, marginBottom: 12 }}>
                      {'\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f'}
                    </div>
                    <div className="grid-2" style={{ marginBottom: 20 }}>
                      {p.apps.map(app => (
                        <button
                          key={app.name}
                          className="btn btn-outline btn-sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.Telegram?.WebApp?.openLink(app.url)
                          }}
                        >
                          {'\u{1F4E5}'} {app.name}
                        </button>
                      ))}
                    </div>

                    {/* Steps */}
                    <div className="section-title" style={{ fontSize: 14, marginBottom: 12 }}>
                      {'\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f'}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {p.steps.map((step, i) => (
                        <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                          <div style={{
                            width: 24, height: 24, borderRadius: '50%',
                            background: 'var(--gradient-primary)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 12, fontWeight: 700, flexShrink: 0,
                          }}>
                            {i + 1}
                          </div>
                          <span className="text-sm text-secondary" style={{ paddingTop: 2 }}>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
