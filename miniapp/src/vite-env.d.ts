/// <reference types="vite/client" />

interface TelegramWebApp {
  initData: string
  ready(): void
  expand(): void
  close(): void
  setHeaderColor(color: string): void
  setBackgroundColor(color: string): void
  openLink(url: string): void
  showAlert(message: string): void
  themeParams: Record<string, string>
  HapticFeedback: {
    impactOccurred(style: 'light' | 'medium' | 'heavy'): void
    notificationOccurred(type: 'error' | 'success' | 'warning'): void
  }
  BackButton: {
    show(): void
    hide(): void
    onClick(cb: () => void): void
    offClick(cb: () => void): void
  }
  MainButton: {
    text: string
    show(): void
    hide(): void
    onClick(cb: () => void): void
    offClick(cb: () => void): void
    setParams(params: { text?: string; color?: string; text_color?: string; is_active?: boolean }): void
  }
}

interface Window {
  Telegram?: {
    WebApp?: TelegramWebApp
  }
}
