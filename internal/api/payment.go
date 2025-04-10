package api

import (
	"encoding/json"
	"net/http"

	"vpn-bot/internal/service"
)

type PaymentHandler struct {
	paymentSvc *service.PaymentService
}

func NewPaymentHandler(paymentSvc *service.PaymentService) *PaymentHandler {
	// ...
}


type CreatePaymentRequest struct {
	Method   string `json:"method"`
	PlanID   int64  `json:"plan_id"`
	ServerID int64  `json:"server_id"`
}

type CreatePaymentResponse struct {
	PaymentURL string `json:"payment_url,omitempty"`
	PaymentID  int64  `json:"payment_id,omitempty"`
	Method     string `json:"method"`
}

func (h *PaymentHandler) Create(w http.ResponseWriter, r *http.Request) {
	// ...
}

