package service

import (
	"context"
	"fmt"
	"time"

	"github.com/rs/zerolog/log"

	"vpn-bot/internal/client/marzban"
	"vpn-bot/internal/model"
	"vpn-bot/internal/repository"
)

// defaultInboundTag — название inbound-тега в Marzban для VLESS+Reality.
// Должно совпадать с настройкой в конфигурации XRay на каждом сервере.
const defaultInboundTag = "VLESS_REALITY_INBOUND"

type VPNService struct {
	subRepo    repository.SubscriptionRepo
	serverRepo repository.ServerRepo
	marzban    *marzban.ClientPool
}

func NewVPNService(subRepo repository.SubscriptionRepo, serverRepo repository.ServerRepo, marzban *marzban.ClientPool) *VPNService {
	// ...
}


func (s *VPNService) CreateAccount(ctx context.Context, userID, planID, serverID int64, expiresAt time.Time, dataLimitBytes int64) (*model.Subscription, error) {
	// ...
}


func (s *VPNService) DisableAccount(ctx context.Context, sub *model.Subscription) error {
	// ...
}


func (s *VPNService) GetActiveSubscription(ctx context.Context, userID int64) (*model.Subscription, error) {
	// ...
}


func (s *VPNService) GetUserTraffic(ctx context.Context, sub *model.Subscription) (int64, error) {
	// ...
}

