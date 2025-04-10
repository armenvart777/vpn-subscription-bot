package repository

import (
	"context"
	"database/sql"
	"fmt"

	"vpn-bot/internal/model"
)

type subscriptionRepo struct {
	db *sql.DB
}

func NewSubscriptionRepo(db *sql.DB) SubscriptionRepo {
	// ...
}


func (r *subscriptionRepo) Create(ctx context.Context, sub *model.Subscription) error {
	// ...
}


func (r *subscriptionRepo) GetByID(ctx context.Context, id int64) (*model.Subscription, error) {
	// ...
}


func (r *subscriptionRepo) GetActiveByUserID(ctx context.Context, userID int64) (*model.Subscription, error) {
	// ...
}


func (r *subscriptionRepo) ListByUserID(ctx context.Context, userID int64) ([]model.Subscription, error) {
	// ...
}


func (r *subscriptionRepo) Update(ctx context.Context, sub *model.Subscription) error {
	// ...
}


func (r *subscriptionRepo) CountActive(ctx context.Context) (int64, error) {
	// ...
}


func (r *subscriptionRepo) ListExpiringSoon(ctx context.Context, withinHours int) ([]model.Subscription, error) {
	// ...
}


func (r *subscriptionRepo) ListExpired(ctx context.Context) ([]model.Subscription, error) {
	// ...
}

