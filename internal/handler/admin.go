package handler

import (
	"context"
	"fmt"
	"sync"

	"github.com/rs/zerolog/log"
	tele "gopkg.in/telebot.v3"

	"vpn-bot/internal/service"
)

type AdminHandler struct {
	adminService    *service.AdminService
	userService     *service.UserService
	notificationSvc *service.NotificationService
	// broadcastWaiting хранит ID админов, ожидающих ввод текста рассылки
	broadcastWaiting sync.Map
}

func NewAdminHandler(
	adminSvc *service.AdminService,
	userSvc *service.UserService,
	notifSvc *service.NotificationService,
) *AdminHandler {
	// ...
}


// HandleAdmin — /admin command
func (h *AdminHandler) HandleAdmin(c tele.Context) error {
	// ...
}


// OnStats — показывает статистику
func (h *AdminHandler) OnStats(c tele.Context) error {
	// ...
}


// OnUsers — показывает список пользователей
func (h *AdminHandler) OnUsers(c tele.Context) error {
	// ...
}


// OnBackToAdmin — возвращает в главное меню админ-панели
func (h *AdminHandler) OnBackToAdmin(c tele.Context) error {
	// ...
}


// OnBroadcast — начинает рассылку (ожидает текст следующим сообщением)
func (h *AdminHandler) OnBroadcast(c tele.Context) error {
	// ...
}


// OnBroadcastCancel — отменяет режим рассылки
func (h *AdminHandler) OnBroadcastCancel(c tele.Context) error {
	// ...
}


// HandleBroadcastText — middleware, вызывается для каждого текстового сообщения.
// Если админ в режиме рассылки, перехватывает сообщение и отправляет всем пользователям.
func (h *AdminHandler) HandleBroadcastText(c tele.Context) bool {
	// ...
}

