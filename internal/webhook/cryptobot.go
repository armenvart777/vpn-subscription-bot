package webhook

import (
	"context"
	"encoding/json"
	"io"
	"net/http"
	"time"

	"github.com/rs/zerolog/log"

	"vpn-bot/internal/client/cryptobot"
)

func (s *Server) handleCryptoBot(w http.ResponseWriter, r *http.Request) {
	// ...
}

