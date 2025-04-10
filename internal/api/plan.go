package api

import (
	"net/http"

	"vpn-bot/internal/service"
)

type PlanHandler struct {
	subSvc    *service.SubscriptionService
	serverSvc *service.ServerService
}

func NewPlanHandler(subSvc *service.SubscriptionService, serverSvc *service.ServerService) *PlanHandler {
	// ...
}


type PlanResponse struct {
	ID           int64   `json:"id"`
	Name         string  `json:"name"`
	DurationDays int     `json:"duration_days"`
	PriceRUB     float64 `json:"price_rub"`
	PriceStars   int     `json:"price_stars"`
	PriceUSDT    string  `json:"price_usdt"`
	DataLimitGB  int64   `json:"data_limit_gb"`
	DeviceLimit  int     `json:"device_limit"`
}

func (h *PlanHandler) ListPlans(w http.ResponseWriter, r *http.Request) {
	// ...
}


type ServerResponse struct {
	ID           int64  `json:"id"`
	Name         string `json:"name"`
	Country      string `json:"country"`
	CountryName  string `json:"country_name"`
	Flag         string `json:"flag"`
	CurrentUsers int    `json:"current_users"`
	MaxUsers     int    `json:"max_users"`
}

func (h *PlanHandler) ListServers(w http.ResponseWriter, r *http.Request) {
	// ...
}

