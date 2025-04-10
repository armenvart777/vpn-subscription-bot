package cryptobot

import "encoding/json"

// CreateInvoiceRequest — запрос на создание счёта в CryptoBot
type CreateInvoiceRequest struct {
	Asset          string `json:"asset"`
	Amount         string `json:"amount"`
	Description    string `json:"description,omitempty"`
	Payload        string `json:"payload,omitempty"`
	PaidBtnName    string `json:"paid_btn_name,omitempty"`
	PaidBtnURL     string `json:"paid_btn_url,omitempty"`
	AllowComments  bool   `json:"allow_comments"`
	AllowAnonymous bool   `json:"allow_anonymous"`
}

// Invoice — объект счёта CryptoBot
type Invoice struct {
	InvoiceID   int64  `json:"invoice_id"`
	Status      string `json:"status"`
	Hash        string `json:"hash"`
	Asset       string `json:"asset"`
	Amount      string `json:"amount"`
	BotInvoiceURL string `json:"bot_invoice_url"`
	MiniAppURL  string `json:"mini_app_invoice_url"`
	Description string `json:"description"`
	Payload     string `json:"payload"`
	PaidAt      string `json:"paid_at,omitempty"`
}

// APIResponse — обёртка ответа CryptoBot API
type APIResponse struct {
	OK     bool            `json:"ok"`
	Result json.RawMessage `json:"result"`
	Error  *APIError       `json:"error,omitempty"`
}

// APIError — ошибка от API
type APIError struct {
	Code int    `json:"code"`
	Name string `json:"name"`
}

// WebhookUpdate — входящий вебхук от CryptoBot
type WebhookUpdate struct {
	UpdateID   int64   `json:"update_id"`
	UpdateType string  `json:"update_type"`
	RequestDate string `json:"request_date"`
	Payload    Invoice `json:"payload"`
}
