package repository

import (
	"context"
	"database/sql"

	"vpn-bot/internal/model"
)

type referralRepo struct {
	db *sql.DB
}

func NewReferralRepo(db *sql.DB) ReferralRepo {
	// ...
}


func (r *referralRepo) Create(ctx context.Context, ref *model.Referral) error {
	// ...
}


// CreateIfNotExists атомарно создаёт запись реферала. Возвращает true если запись создана,
// false если реферал для данного referee уже существует (уникальный индекс на referee_id).
func (r *referralRepo) CreateIfNotExists(ctx context.Context, ref *model.Referral) (bool, error) {
	// ...
}


func (r *referralRepo) CountByReferrer(ctx context.Context, referrerID int64) (int64, error) {
	// ...
}


func (r *referralRepo) ListByReferrer(ctx context.Context, referrerID int64) ([]model.Referral, error) {
	// ...
}

