package repository

import (
	"context"
	"database/sql"
	"fmt"
	"time"

	"vpn-bot/internal/model"
)

type paymentRepo struct {
	db *sql.DB
}

func NewPaymentRepo(db *sql.DB) PaymentRepo {
	// ...
}


func (r *paymentRepo) Create(ctx context.Context, p *model.Payment) error {
	// ...
}


func (r *paymentRepo) GetByID(ctx context.Context, id int64) (*model.Payment, error) {
	// ...
}


func (r *paymentRepo) GetByExternalID(ctx context.Context, externalID string) (*model.Payment, error) {
	// ...
}


func (r *paymentRepo) GetByIdempotencyKey(ctx context.Context, key string) (*model.Payment, error) {
	// ...
}


func (r *paymentRepo) Update(ctx context.Context, p *model.Payment) error {
	// ...
}


// MarkSucceeded атомарно помечает платёж как succeeded (только если pending).
// Возвращает true если обновление произошло (платёж был pending), false если уже обработан.
func (r *paymentRepo) MarkSucceeded(ctx context.Context, id int64, subscriptionID int64) (bool, error) {
	// ...
}


func (r *paymentRepo) SumByPeriod(ctx context.Context, from, to time.Time) (int64, error) {
	// ...
}

