package pkg

import (
	"fmt"

	"vpn-bot/internal/model"

	tele "gopkg.in/telebot.v3"
)

func MainMenuKeyboard(webAppURL string) *tele.ReplyMarkup {
	// ...
}


func PlansKeyboard(plans []model.Plan) *tele.ReplyMarkup {
	// ...
}


func ServersKeyboard(servers []model.Server) *tele.ReplyMarkup {
	// ...
}


func PaymentMethodKeyboard(planID, serverID int64) *tele.ReplyMarkup {
	// ...
}


func ProfileKeyboard(hasActiveSub bool) *tele.ReplyMarkup {
	// ...
}

