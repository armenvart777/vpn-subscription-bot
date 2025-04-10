package service

import (
	"context"
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/rs/zerolog/log"

	"vpn-bot/internal/client/cryptobot"
	"vpn-bot/internal/client/yukassa"
	"vpn-bot/internal/model"
	"vpn-bot/internal/repository"
)

type PaymentService struct {
	paymentRepo  repository.PaymentRepo
	planRepo     repository.PlanRepo
	userRepo     repository.UserRepo
	vpnService   *VPNService
	referralSvc  *ReferralService
	notification *NotificationService
	yukassa      *yukassa.Client
	cryptoBot    *cryptobot.Client
}

func NewPaymentService(
	paymentRepo repository.PaymentRepo,
	planRepo repository.PlanRepo,
	userRepo repository.UserRepo,
	vpnSvc *VPNService,
	yk *yukassa.Client,
	cb *cryptobot.Client,
) *PaymentService {
	// ...
}


// SetReferralService устанавливает сервис рефералов (вызывается после инициализации)
func (s *PaymentService) SetReferralService(refSvc *ReferralService) {
	// ...
}


// SetNotificationService устанавливает сервис уведомлений (вызывается после инициализации)
func (s *PaymentService) SetNotificationService(notifSvc *NotificationService) {
	// ...
}


// CreateYuKassaPayment создаёт платёж через ЮKassa и возвращает URL оплаты
func (s *PaymentService) CreateYuKassaPayment(ctx context.Context, userID, planID, serverID int64) (string, error) {
	// ...
}


// CreateCryptoPayment создаёт счёт через CryptoBot и возвращает URL оплаты
func (s *PaymentService) CreateCryptoPayment(ctx context.Context, userID, planID, serverID int64) (string, error) {
	// ...
}


// CreateStarsPayment сохраняет pending-платёж для Telegram Stars
func (s *PaymentService) CreateStarsPayment(ctx context.Context, userID, planID, serverID int64) (*model.Payment, *model.Plan, error) {
	// ...
}


// ProcessSuccessfulPayment обрабатывает успешную оплату: создаёт VPN-аккаунт
func (s *PaymentService) ProcessSuccessfulPayment(ctx context.Context, paymentID int64) error {
	// ...
}


// ProcessWebhookByExternalID находит платёж по external_id и обрабатывает
func (s *PaymentService) ProcessWebhookByExternalID(ctx context.Context, externalID string) error {
	// ...
}


// ProcessCryptoWebhook обрабатывает вебхук CryptoBot по payload
func (s *PaymentService) ProcessCryptoWebhook(ctx context.Context, payload string) error {
	// ...
}


// GetPayment возвращает платёж по ID
func (s *PaymentService) GetPayment(ctx context.Context, id int64) (*model.Payment, error) {
	// ...
}

