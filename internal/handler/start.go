package handler

import (
	"context"
	"strings"

	"github.com/rs/zerolog/log"
	tele "gopkg.in/telebot.v3"

	"vpn-bot/internal/pkg"
	"vpn-bot/internal/service"
)

type StartHandler struct {
	userService *service.UserService
	webAppURL   string
}

func NewStartHandler(userService *service.UserService, webAppURL string) *StartHandler {
	// ...
}


func (h *StartHandler) Handle(c tele.Context) error {
	// ...
}

