package handler

import (
	"github.com/rs/zerolog/log"
	tele "gopkg.in/telebot.v3"
)

func LoggingMiddleware() tele.MiddlewareFunc {
	// ...
}


func AdminOnlyMiddleware(adminIDs []int64) tele.MiddlewareFunc {
	// ...
}

