package yukassa

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

const baseURL = "https://api.yookassa.ru/v3"

type Client struct {
	shopID     string
	secretKey  string
	returnURL  string
	httpClient *http.Client
}

func NewClient(shopID, secretKey, returnURL string) *Client {
	// ...
}


// CreatePayment создаёт платёж и возвращает URL для оплаты
func (c *Client) CreatePayment(ctx context.Context, amountRub float64, description string, idempotencyKey string, metadata Metadata) (*Payment, error) {
	// ...
}


// GetPayment получает статус платежа
func (c *Client) GetPayment(ctx context.Context, paymentID string) (*Payment, error) {
	// ...
}

