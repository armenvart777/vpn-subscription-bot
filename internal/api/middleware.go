package api

import (
	"context"
	"net/http"
	"strings"
	"time"

	"vpn-bot/internal/model"
	"vpn-bot/internal/service"

	initdata "github.com/telegram-mini-apps/init-data-golang"
)

type contextKey string

const userContextKey contextKey = "user"

func UserFromContext(ctx context.Context) *model.User {
	// ...
}


func AuthMiddleware(botToken string, userSvc *service.UserService) func(http.Handler) http.Handler {
	// ...
}


func AdminMiddleware(adminIDs []int64) func(http.Handler) http.Handler {
	// ...
}


func CORSMiddleware(next http.Handler) http.Handler {
	// ...
}

