package repository

import (
	"context"
	"time"

	"vpn-bot/internal/model"
)

type UserRepo interface {
	Create(ctx context.Context, user *model.User) error
	GetByTelegramID(ctx context.Context, tgID int64) (*model.User, error)
	GetByID(ctx context.Context, id int64) (*model.User, error)
	GetByRefCode(ctx context.Context, code string) (*model.User, error)
	Update(ctx context.Context, user *model.User) error
	AddBalance(ctx context.Context, userID int64, amount int64) error
	CountAll(ctx context.Context) (int64, error)
	ListAll(ctx context.Context, offset, limit int) ([]model.User, error)
}

type PlanRepo interface {
	GetByID(ctx context.Context, id int64) (*model.Plan, error)
	ListActive(ctx context.Context) ([]model.Plan, error)
}

type SubscriptionRepo interface {
	Create(ctx context.Context, sub *model.Subscription) error
	GetByID(ctx context.Context, id int64) (*model.Subscription, error)
	GetActiveByUserID(ctx context.Context, userID int64) (*model.Subscription, error)
	ListByUserID(ctx context.Context, userID int64) ([]model.Subscription, error)
	Update(ctx context.Context, sub *model.Subscription) error
	CountActive(ctx context.Context) (int64, error)
	ListExpiringSoon(ctx context.Context, withinHours int) ([]model.Subscription, error)
	ListExpired(ctx context.Context) ([]model.Subscription, error)
}

type PaymentRepo interface {
	Create(ctx context.Context, payment *model.Payment) error
	GetByID(ctx context.Context, id int64) (*model.Payment, error)
	GetByExternalID(ctx context.Context, externalID string) (*model.Payment, error)
	GetByIdempotencyKey(ctx context.Context, key string) (*model.Payment, error)
	Update(ctx context.Context, payment *model.Payment) error
	MarkSucceeded(ctx context.Context, id int64, subscriptionID int64) (bool, error)
	SumByPeriod(ctx context.Context, from, to time.Time) (int64, error)
}

type ReferralRepo interface {
	Create(ctx context.Context, ref *model.Referral) error
	CreateIfNotExists(ctx context.Context, ref *model.Referral) (bool, error)
	CountByReferrer(ctx context.Context, referrerID int64) (int64, error)
	ListByReferrer(ctx context.Context, referrerID int64) ([]model.Referral, error)
}

type ServerRepo interface {
	GetByID(ctx context.Context, id int64) (*model.Server, error)
	ListActive(ctx context.Context) ([]model.Server, error)
	IncrementUsers(ctx context.Context, id int64) error
	DecrementUsers(ctx context.Context, id int64) error
}
