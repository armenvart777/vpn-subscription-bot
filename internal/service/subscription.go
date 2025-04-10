package service

import (
	"context"

	"vpn-bot/internal/model"
	"vpn-bot/internal/repository"
)

type SubscriptionService struct {
	subRepo  repository.SubscriptionRepo
	planRepo repository.PlanRepo
}

func NewSubscriptionService(subRepo repository.SubscriptionRepo, planRepo repository.PlanRepo) *SubscriptionService {
	// ...
}


func (s *SubscriptionService) GetActive(ctx context.Context, userID int64) (*model.Subscription, error) {
	// ...
}


func (s *SubscriptionService) ListByUser(ctx context.Context, userID int64) ([]model.Subscription, error) {
	// ...
}


func (s *SubscriptionService) ListPlans(ctx context.Context) ([]model.Plan, error) {
	// ...
}


func (s *SubscriptionService) GetPlan(ctx context.Context, id int64) (*model.Plan, error) {
	// ...
}


func (s *SubscriptionService) ListExpiringSoon(ctx context.Context, withinHours int) ([]model.Subscription, error) {
	// ...
}


func (s *SubscriptionService) ListExpired(ctx context.Context) ([]model.Subscription, error) {
	// ...
}

