package webhook

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/rs/zerolog/log"

	"vpn-bot/internal/client/yukassa"
	"vpn-bot/internal/config"
	"vpn-bot/internal/service"
)

// maxWebhookBodySize ограничивает размер тела запроса вебхуков (1 MB).
const maxWebhookBodySize = 1 << 20

type Server struct {
	httpServer *http.Server
	payment    *service.PaymentService
	yukassa    *yukassa.Client
	cfg        config.WebhookConfig
	cryptoCfg  config.CryptoBotConfig
}

func NewServer(cfg config.WebhookConfig, cryptoCfg config.CryptoBotConfig, paymentSvc *service.PaymentService, ykClient *yukassa.Client, extraHandlers ...func(*http.ServeMux)) *Server {
	// ...
}


// Start запускает HTTP-сервер для вебхуков
func (s *Server) Start() error {
	// ...
}


// Shutdown корректно останавливает сервер
func (s *Server) Shutdown(ctx context.Context) error {
	// ...
}

