package scheduler

import (
	"context"
	"time"

	"github.com/rs/zerolog/log"

	"vpn-bot/internal/service"
)

type Scheduler struct {
	subService    *service.SubscriptionService
	vpnService    *service.VPNService
	userService   *service.UserService
	notification  *service.NotificationService
	checkInterval time.Duration
	notifyBefore  time.Duration
	stopCh        chan struct{}
	notifiedSubs  map[int64]struct{} // tracks sub IDs already notified about expiry
}

func New(
	subSvc *service.SubscriptionService,
	vpnSvc *service.VPNService,
	userSvc *service.UserService,
	notifSvc *service.NotificationService,
	checkInterval time.Duration,
	notifyBefore time.Duration,
) *Scheduler {
	// ...
}


// Start запускает периодические задачи
func (s *Scheduler) Start() {
	// ...
}


// Stop останавливает планировщик
func (s *Scheduler) Stop() {
	// ...
}


func (s *Scheduler) runTasks() {
	// ...
}


// notifyExpiringSoon отправляет уведомления о скором истечении
func (s *Scheduler) notifyExpiringSoon() {
	// ...
}


// disableExpired отключает просроченные подписки через Marzban
func (s *Scheduler) disableExpired() {
	// ...
}

