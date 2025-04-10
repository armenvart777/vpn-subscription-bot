package service

import (
	"context"
	"fmt"

	"github.com/rs/zerolog/log"

	"vpn-bot/internal/model"
	"vpn-bot/internal/repository"
)

type ReferralService struct {
	referralRepo repository.ReferralRepo
	userRepo     repository.UserRepo
	bonusPercent int
	bonusFixed   int64
}

func NewReferralService(
	refRepo repository.ReferralRepo,
	userRepo repository.UserRepo,
	bonusPercent int,
	bonusFixed int64,
) *ReferralService {
	// ...
}


// CreditReferralBonus начисляет бонус рефереру при первой покупке реферала.
// Возвращает сумму начисленного бонуса (0 если бонус не начислен).
// Использует атомарный INSERT ON CONFLICT для защиты от race condition.
func (s *ReferralService) CreditReferralBonus(ctx context.Context, buyerID int64, paymentAmount int64) (int64, error) {
	// ...
}


// GetStats возвращает статистику рефералов пользователя.
// Делает один запрос вместо двух — count берём из len(refs).
func (s *ReferralService) GetStats(ctx context.Context, userID int64) (count int64, totalBonus int64, err error) {
	// ...
}

