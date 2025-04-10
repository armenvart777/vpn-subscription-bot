interface Props {
  message?: string
  onRetry?: () => void
}

export default function ErrorState({ message, onRetry }: Props) {
  return (
    <div className="error-state fade-in">
      <div className="error-icon">{'\u{1F6AB}'}</div>
      <div className="error-title">{'\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a'}</div>
      <div className="error-message">
        {message || '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430.'}
      </div>
      {onRetry && (
        <button className="btn btn-primary" style={{ width: 'auto', padding: '12px 32px', marginTop: 8 }} onClick={onRetry}>
          {'\u{1F504}'} {'\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430'}
        </button>
      )}
    </div>
  )
}
