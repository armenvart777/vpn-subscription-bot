package service

import (
	"context"
	"fmt"

	"vpn-bot/internal/model"
	"vpn-bot/internal/repository"
)

type ServerService struct {
	serverRepo repository.ServerRepo
}

func NewServerService(serverRepo repository.ServerRepo) *ServerService {
	// ...
}


func (s *ServerService) ListAvailable(ctx context.Context) ([]model.Server, error) {
	// ...
}


func (s *ServerService) GetByID(ctx context.Context, id int64) (*model.Server, error) {
	// ...
}

