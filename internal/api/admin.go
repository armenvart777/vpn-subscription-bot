package api

import (
	"encoding/json"
	"net/http"
	"strconv"

	"vpn-bot/internal/service"
)

type AdminHandler struct {
	adminSvc    *service.AdminService
	notifSvc    *service.NotificationService
	userSvc     *service.UserService
}

func NewAdminHandler(
	adminSvc *service.AdminService,
	notifSvc *service.NotificationService,
	userSvc *service.UserService,
) *AdminHandler {
	// ...
}


type StatsResponse struct {
	TotalUsers       int64   `json:"total_users"`
	ActiveSubs       int     `json:"active_subs"`
	RevenueToday     float64 `json:"revenue_today"`
	RevenueThisMonth float64 `json:"revenue_this_month"`
	ExpiringSoon     int     `json:"expiring_soon"`
}

func (h *AdminHandler) GetStats(w http.ResponseWriter, r *http.Request) {
	// ...
}


type UserInfoResponse struct {
	TelegramID   int64   `json:"telegram_id"`
	Username     string  `json:"username"`
	FirstName    string  `json:"first_name"`
	Balance      float64 `json:"balance"`
	HasActiveSub bool    `json:"has_active_sub"`
	SubExpiresAt string  `json:"sub_expires_at,omitempty"`
	CreatedAt    string  `json:"created_at"`
}

type UsersListResponse struct {
	Users []UserInfoResponse `json:"users"`
	Total int64              `json:"total"`
}

func (h *AdminHandler) ListUsers(w http.ResponseWriter, r *http.Request) {
	// ...
}


type BroadcastRequest struct {
	Message string `json:"message"`
}

type BroadcastResponse struct {
	Sent   int `json:"sent"`
	Failed int `json:"failed"`
}

func (h *AdminHandler) Broadcast(w http.ResponseWriter, r *http.Request) {
	// ...
}

