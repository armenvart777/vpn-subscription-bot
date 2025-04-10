package cryptobot

import (
	"bytes"
	"context"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

const baseURL = "https://pay.crypt.bot/api"

type Client struct {
	token      string
	httpClient *http.Client
}

func NewClient(token string) *Client {
	// ...
}


// CreateInvoice создаёт счёт на оплату в криптовалюте
func (c *Client) CreateInvoice(ctx context.Context, req CreateInvoiceRequest) (*Invoice, error) {
	// ...
}


// VerifyWebhookSignature проверяет подпись вебхука CryptoBot
func VerifyWebhookSignature(token string, body []byte, signature string) bool {
	// ...
}

