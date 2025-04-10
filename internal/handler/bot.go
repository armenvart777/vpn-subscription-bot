package handler

import (
	tele "gopkg.in/telebot.v3"

	"vpn-bot/internal/service"
)

type Deps struct {
	UserService         *service.UserService
	SubscriptionService *service.SubscriptionService
	ServerService       *service.ServerService
	VPNService          *service.VPNService
	PaymentService      *service.PaymentService
	ReferralService     *service.ReferralService
	AdminService        *service.AdminService
	NotificationService *service.NotificationService
	AdminIDs            []int64
	BotUsername          string
	WebAppURL           string
}

func SetupBot(bot *tele.Bot, deps *Deps) {
	// ...
}

