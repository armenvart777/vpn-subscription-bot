package handler

import (
	"context"
	"fmt"

	"github.com/rs/zerolog/log"
	tele "gopkg.in/telebot.v3"

	"vpn-bot/internal/service"
)

type ReferralHandler struct {
	referralService *service.ReferralService
	userService     *service.UserService
	botUsername      string
}

func NewReferralHandler(refSvc *service.ReferralService, userSvc *service.UserService, botUsername string) *ReferralHandler {
	// ...
}


// ShowReferralProgram показывает реферальную программу
func (h *ReferralHandler) ShowReferralProgram(c tele.Context) error {
	// ...
}


// OnCopyRefLink — отправляет ссылку отдельным сообщением для копирования
func (h *ReferralHandler) OnCopyRefLink(c tele.Context) error {
	// ...
}

