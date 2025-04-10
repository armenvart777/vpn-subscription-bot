package webhook

import (
	"context"
	"encoding/json"
	"io"
	"net/http"
	"time"

	"github.com/rs/zerolog/log"

	"vpn-bot/internal/client/yukassa"
)

func (s *Server) handleYuKassa(w http.ResponseWriter, r *http.Request) {
	// ...
}

