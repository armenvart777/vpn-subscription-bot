package handler

import (
	"context"
	"fmt"
	"strconv"
	"strings"

	"github.com/rs/zerolog/log"
	tele "gopkg.in/telebot.v3"

	"vpn-bot/internal/service"
)

type PaymentHandler struct {
	paymentService *service.PaymentService
	userService    *service.UserService
	subService     *service.SubscriptionService
}

func NewPaymentHandler(
	paySvc *service.PaymentService,
	userSvc *service.UserService,
	subSvc *service.SubscriptionService,
) *PaymentHandler {
	// ...
}


// OnPayYuKassa — нажатие кнопки "ЮKassa"
func (h *PaymentHandler) OnPayYuKassa(c tele.Context) error {
	// ...
}


// OnPayCrypto — нажатие кнопки "Криптовалюта"
func (h *PaymentHandler) OnPayCrypto(c tele.Context) error {
	// ...
}


// OnPayStars — нажатие кнопки "Telegram Stars"
func (h *PaymentHandler) OnPayStars(c tele.Context) error {
	// ...
}


// OnPreCheckout — обработка pre_checkout_query (Telegram Stars)
func (h *PaymentHandler) OnPreCheckout(c tele.Context) error {
	// ...
}


// OnSuccessfulPayment — обработка successful_payment (Telegram Stars)
func (h *PaymentHandler) OnSuccessfulPayment(c tele.Context) error {
	// ...
}


func parsePaymentData(data string) (planID, serverID int64, err error) {
	// ...
}

