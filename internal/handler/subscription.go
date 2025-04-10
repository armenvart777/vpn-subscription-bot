package handler

import (
	"bytes"
	"context"
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/rs/zerolog/log"
	tele "gopkg.in/telebot.v3"

	"vpn-bot/internal/model"
	"vpn-bot/internal/pkg"
	"vpn-bot/internal/service"
)

type SubscriptionHandler struct {
	subService    *service.SubscriptionService
	serverService *service.ServerService
	userService   *service.UserService
	vpnService    *service.VPNService
}

func NewSubscriptionHandler(
	subSvc *service.SubscriptionService,
	serverSvc *service.ServerService,
	userSvc *service.UserService,
	vpnSvc *service.VPNService,
) *SubscriptionHandler {
	// ...
}


func (h *SubscriptionHandler) ShowPlans(c tele.Context) error {
	// ...
}


func (h *SubscriptionHandler) OnPlanSelected(c tele.Context) error {
	// ...
}


func (h *SubscriptionHandler) OnServerSelected(c tele.Context) error {
	// ...
}


// serversWithPlanKeyboard encodes planID into server callback data
func serversWithPlanKeyboard(servers []model.Server, planID int64) *tele.ReplyMarkup {
	// ...
}


func (h *SubscriptionHandler) ShowProfile(c tele.Context) error {
	// ...
}


// ShowProfileEdit — версия ShowProfile для callback (редактирует сообщение)
func (h *SubscriptionHandler) ShowProfileEdit(c tele.Context) error {
	// ...
}


func (h *SubscriptionHandler) ShowVPNKey(c tele.Context) error {
	// ...
}


// ShowTraffic показывает использование трафика
func (h *SubscriptionHandler) ShowTraffic(c tele.Context) error {
	// ...
}

