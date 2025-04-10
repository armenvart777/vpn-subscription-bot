package api

import (
	"net/http"

	"vpn-bot/internal/service"
)

type Config struct {
	BotToken   string
	AdminIDs   []int64
	BotUsername string
}

func NewRouter(
	cfg Config,
	userSvc *service.UserService,
	subSvc *service.SubscriptionService,
	vpnSvc *service.VPNService,
	paymentSvc *service.PaymentService,
	referralSvc *service.ReferralService,
	serverSvc *service.ServerService,
	adminSvc *service.AdminService,
	notifSvc *service.NotificationService,
) http.Handler {
	// ...
}

