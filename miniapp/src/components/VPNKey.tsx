import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

interface Props {
  vlessLink: string
}

export default function VPNKey({ vlessLink }: Props) {
  const [copied, setCopied] = useState(false)
  const [showQR, setShowQR] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(vlessLink)
      setCopied(true)
      window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred('success')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.Telegram?.WebApp?.showAlert(vlessLink)
    }
  }

  return (
    <div className="gap-12">
      <div className="vpn-key-box">{vlessLink}</div>

      <div className="grid-2">
        <button className="btn btn-primary btn-sm" onClick={handleCopy}>
          {copied ? '\u2713 \u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e' : '\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c'}
        </button>
        <button className="btn btn-secondary btn-sm" onClick={() => setShowQR(!showQR)}>
          {showQR ? '\u0421\u043a\u0440\u044b\u0442\u044c QR' : '\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c QR'}
        </button>
      </div>

      {showQR && (
        <div className="slide-up" style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
          <div style={{
            background: '#fff',
            padding: 16,
            borderRadius: 'var(--radius-sm)',
          }}>
            <QRCodeSVG value={vlessLink} size={200} />
          </div>
        </div>
      )}

      <div className="card" style={{ padding: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{'\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f'}</div>
        <div className="text-xs text-secondary gap-4" style={{ gap: 4, display: 'flex', flexDirection: 'column' }}>
          <div>{'\u{1F4F1}'} iOS: V2Box, Streisand</div>
          <div>{'\u{1F916}'} Android: V2rayNG, Hiddify</div>
          <div>{'\u{1F4BB}'} Windows: Hiddify, Nekoray</div>
          <div>{'\u{1F34E}'} macOS: V2Box, Hiddify</div>
        </div>
      </div>
    </div>
  )
}
