package marzban

import (
	"bytes"
	"context"
	"crypto/tls"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"sync"
	"time"

	"github.com/redis/go-redis/v9"
	"github.com/rs/zerolog/log"

	"vpn-bot/internal/config"
)

type Client struct {
	serverID   int64
	baseURL    string
	username   string
	password   string
	httpClient *http.Client
	redis      *redis.Client
}

func NewClient(serverID int64, baseURL, username, password string, rdb *redis.Client) *Client {
	// ...
}


// doRequest performs an authenticated API request with automatic token refresh
func (c *Client) doRequest(ctx context.Context, method, path string, body io.Reader) (*http.Response, error) {
	// ...
}


func (c *Client) doRequestWithToken(ctx context.Context, method, path string, body io.Reader, token string) (*http.Response, error) {
	// ...
}


func decodeResponse(resp *http.Response, target interface{}) error {
	// ...
}


// ClientPool manages multiple Marzban clients for multi-node setup
type ClientPool struct {
	clients map[int64]*Client
	mu      sync.RWMutex
}

func NewClientPool(servers []config.MarzbanServer, rdb *redis.Client) *ClientPool {
	// ...
}


func (p *ClientPool) GetClient(serverID int64) (*Client, error) {
	// ...
}

