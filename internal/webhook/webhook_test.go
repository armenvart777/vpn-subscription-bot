package webhook

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestYuKassaWebhook_methodNotAllowed(t *testing.T) {
	// ...
}


func TestCryptoBotWebhook_methodNotAllowed(t *testing.T) {
	// ...
}


func TestYuKassaWebhook_bodyTooLarge(t *testing.T) {
	// ...
}


func TestCryptoBotWebhook_bodyTooLarge(t *testing.T) {
	// ...
}


func TestYuKassaWebhook_invalidJSON(t *testing.T) {
	// ...
}


func TestCryptoBotWebhook_noSignature(t *testing.T) {
	// ...
}


func TestMaxWebhookBodySize(t *testing.T) {
	// ...
}

