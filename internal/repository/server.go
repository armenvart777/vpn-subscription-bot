package repository

import (
	"context"
	"database/sql"
	"fmt"

	"vpn-bot/internal/model"
)

type serverRepo struct {
	db *sql.DB
}

func NewServerRepo(db *sql.DB) ServerRepo {
	// ...
}


func (r *serverRepo) GetByID(ctx context.Context, id int64) (*model.Server, error) {
	// ...
}


func (r *serverRepo) ListActive(ctx context.Context) ([]model.Server, error) {
	// ...
}


func (r *serverRepo) IncrementUsers(ctx context.Context, id int64) error {
	// ...
}


func (r *serverRepo) DecrementUsers(ctx context.Context, id int64) error {
	// ...
}

