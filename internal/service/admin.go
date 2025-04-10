package service

import (
	"context"
	"fmt"
	"time"

	"vpn-bot/internal/repository"
)

type AdminService struct {
	userRepo    repository.UserRepo
	paymentRepo repository.PaymentRepo
	subRepo     repository.SubscriptionRepo
	serverRepo  repository.ServerRepo
}

func NewAdminService(
	userRepo repository.UserRepo,
	paymentRepo repository.PaymentRepo,
	subRepo repository.SubscriptionRepo,
	serverRepo repository.ServerRepo,
) *AdminService {
	// ...
}


type Stats struct {
	TotalUsers        int64
	ActiveSubs        int
	RevenueToday      int64
	RevenueThisMonth  int64
	ExpiringSoon      int
}

// GetStats возвращает общую статистику
func (s *AdminService) GetStats(ctx context.Context) (*Stats, error) {
	// ...
}


// ListUsers возвращает список пользователей с пагинацией
func (s *AdminService) ListUsers(ctx context.Context, offset, limit int) ([]UserInfo, int64, error) {
	// ...
}


type UserInfo struct {
	TelegramID   int64
	Username     string
	FirstName    string
	Balance      int64
	HasActiveSub bool
	SubExpiresAt *time.Time
	CreatedAt    time.Time
}
