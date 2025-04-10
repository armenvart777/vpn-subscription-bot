package service

import (
	"fmt"

	"github.com/rs/zerolog/log"
	tele "gopkg.in/telebot.v3"

	"vpn-bot/internal/model"
)

type NotificationService struct {
	bot *tele.Bot
}

func NewNotificationService(bot *tele.Bot) *NotificationService {
	// ...
}


// NotifyPaymentSuccess уведомляет пользователя об успешной оплате
func (s *NotificationService) NotifyPaymentSuccess(user *model.User, sub *model.Subscription) {
	// ...
}


// NotifyExpiringSoon уведомляет о скором истечении подписки
func (s *NotificationService) NotifyExpiringSoon(tgID int64, daysLeft int) {
	// ...
}


// NotifyExpired уведомляет об истечении подписки
func (s *NotificationService) NotifyExpired(tgID int64) {
	// ...
}


// NotifyReferralBonus уведомляет реферера о полученном бонусе
func (s *NotificationService) NotifyReferralBonus(tgID int64, bonusAmount int64) {
	// ...
}


// SendRaw отправляет текстовое сообщение пользователю по Telegram ID
func (s *NotificationService) SendRaw(tgID int64, text string) error {
	// ...
}

