package service

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"fmt"

	"vpn-bot/internal/model"
	"vpn-bot/internal/repository"
)

type UserService struct {
	userRepo repository.UserRepo
}

func NewUserService(userRepo repository.UserRepo) *UserService {
	// ...
}


func (s *UserService) Register(ctx context.Context, tgID int64, username, firstName, lastName string, refCode string) (*model.User, bool, error) {
	// ...
}


func (s *UserService) GetByTelegramID(ctx context.Context, tgID int64) (*model.User, error) {
	// ...
}


func (s *UserService) GetByID(ctx context.Context, id int64) (*model.User, error) {
	// ...
}


func (s *UserService) IsAdmin(ctx context.Context, tgID int64, adminIDs []int64) bool {
	// ...
}


func generateRefCode() (string, error) {
	// ...
}

