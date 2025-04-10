package api

import (
	"net/http"

	"vpn-bot/internal/service"
)

type UserHandler struct {
	userSvc     *service.UserService
	subSvc      *service.SubscriptionService
	referralSvc *service.ReferralService
	serverSvc   *service.ServerService
	botUsername  string
}

func NewUserHandler(
	userSvc *service.UserService,
	subSvc *service.SubscriptionService,
	referralSvc *service.ReferralService,
	serverSvc *service.ServerService,
	botUsername string,
) *UserHandler {
	// ...
}


type MeResponse struct {
	ID         int64   `json:"id"`
	TelegramID int64   `json:"telegram_id"`
	Username   string  `json:"username"`
	FirstName  string  `json:"first_name"`
	Balance    float64 `json:"balance"`
	IsAdmin    bool    `json:"is_admin"`
	RefCode    string  `json:"ref_code"`

	Subscription *SubResponse `json:"subscription,omitempty"`
}

type SubResponse struct {
	ID             int64   `json:"id"`
	Status         string  `json:"status"`
	VLESSLink      string  `json:"vless_link"`
	ExpiresAt      string  `json:"expires_at"`
	DataUsedBytes  int64   `json:"data_used_bytes"`
	DataLimitBytes int64   `json:"data_limit_bytes"`
	ServerName     string  `json:"server_name"`
	ServerCountry  string  `json:"server_country"`
	ServerFlag     string  `json:"server_flag"`
	PlanName       string  `json:"plan_name"`
	AutoRenew      bool    `json:"auto_renew"`
}

func (h *UserHandler) GetMe(w http.ResponseWriter, r *http.Request) {
	// ...
}


type ReferralResponse struct {
	RefCode    string  `json:"ref_code"`
	RefLink    string  `json:"ref_link"`
	Count      int64   `json:"count"`
	TotalBonus float64 `json:"total_bonus"`
}

func (h *UserHandler) GetReferral(w http.ResponseWriter, r *http.Request) {
	// ...
}

