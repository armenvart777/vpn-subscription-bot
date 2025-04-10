package yukassa

// CreatePaymentRequest — запрос на создание платежа в ЮKassa
type CreatePaymentRequest struct {
	Amount         Amount        `json:"amount"`
	Capture        bool          `json:"capture"`
	Confirmation   *Confirmation `json:"confirmation,omitempty"`
	Description    string        `json:"description"`
	Metadata       Metadata      `json:"metadata,omitempty"`
	PaymentMethod  *PaymentData  `json:"payment_method_data,omitempty"`
}

type Amount struct {
	Value    string `json:"value"`
	Currency string `json:"currency"`
}

type Confirmation struct {
	Type      string `json:"type"`
	ReturnURL string `json:"return_url,omitempty"`
	// Ответ
	ConfirmationURL string `json:"confirmation_url,omitempty"`
}

type Metadata map[string]string

type PaymentData struct {
	Type string `json:"type"`
}

// Payment — объект платежа ЮKassa
type Payment struct {
	ID           string        `json:"id"`
	Status       string        `json:"status"`
	Amount       Amount        `json:"amount"`
	Description  string        `json:"description"`
	Confirmation *Confirmation `json:"confirmation,omitempty"`
	Metadata     Metadata      `json:"metadata,omitempty"`
	Paid         bool          `json:"paid"`
	CreatedAt    string        `json:"created_at"`
}

// WebhookEvent — входящее уведомление от ЮKassa
type WebhookEvent struct {
	Type   string  `json:"type"`
	Event  string  `json:"event"`
	Object Payment `json:"object"`
}
