package cryptobot

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"testing"
)

// computeSignature вычисляет подпись тем же алгоритмом, что и CryptoBot
func computeSignature(token string, body []byte) string {
	// ...
}


func TestVerifyWebhookSignature_valid(t *testing.T) {
	// ...
}


func TestVerifyWebhookSignature_invalid(t *testing.T) {
	// ...
}


func TestVerifyWebhookSignature_wrongToken(t *testing.T) {
	// ...
}


func TestVerifyWebhookSignature_emptySignature(t *testing.T) {
	// ...
}


func TestAPIResponse_errorNil(t *testing.T) {
	// ...
}


func TestAPIResponse_withError(t *testing.T) {
	// ...
}


func TestWebhookUpdate_decode(t *testing.T) {
	// ...
}

