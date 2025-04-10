package repository

import (
	"context"
	"database/sql"
	"fmt"

	"vpn-bot/internal/model"
)

type planRepo struct {
	db *sql.DB
}

func NewPlanRepo(db *sql.DB) PlanRepo {
	// ...
}


func (r *planRepo) GetByID(ctx context.Context, id int64) (*model.Plan, error) {
	// ...
}


func (r *planRepo) ListActive(ctx context.Context) ([]model.Plan, error) {
	// ...
}

