package api

import (
	"net/http"

	"vpn-bot/internal/service"
)

type SubscriptionHandler struct {
	subSvc    *service.SubscriptionService
	vpnSvc    *service.VPNService
	serverSvc *service.ServerService
}

func NewSubscriptionHandler(
	subSvc *service.SubscriptionService,
	vpnSvc *service.VPNService,
	serverSvc *service.ServerService,
) *SubscriptionHandler {
	// ...
}


func (h *SubscriptionHandler) GetActive(w http.ResponseWriter, r *http.Request) {
	// ...
}


type TrafficResponse struct {
	UsedBytes  int64 `json:"used_bytes"`
	LimitBytes int64 `json:"limit_bytes"`
}

func (h *SubscriptionHandler) GetTraffic(w http.ResponseWriter, r *http.Request) {
	// ...
}

