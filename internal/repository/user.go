package repository

import (
	"context"
	"database/sql"
	"fmt"

	"vpn-bot/internal/model"
)

type userRepo struct {
	db *sql.DB
}

func NewUserRepo(db *sql.DB) UserRepo {
	// ...
}


func (r *userRepo) Create(ctx context.Context, user *model.User) error {
	// ...
}


func (r *userRepo) GetByTelegramID(ctx context.Context, tgID int64) (*model.User, error) {
	// ...
}


func (r *userRepo) GetByID(ctx context.Context, id int64) (*model.User, error) {
	// ...
}


func (r *userRepo) GetByRefCode(ctx context.Context, code string) (*model.User, error) {
	// ...
}


func (r *userRepo) Update(ctx context.Context, user *model.User) error {
	// ...
}


func (r *userRepo) AddBalance(ctx context.Context, userID int64, amount int64) error {
	// ...
}


func (r *userRepo) CountAll(ctx context.Context) (int64, error) {
	// ...
}


func (r *userRepo) ListAll(ctx context.Context, offset, limit int) ([]model.User, error) {
	// ...
}

