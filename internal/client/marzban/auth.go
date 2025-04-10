package marzban

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"strings"
	"time"

)

const tokenCacheTTL = 55 * time.Minute // Marzban tokens last ~1 hour

func (c *Client) getToken(ctx context.Context) (string, error) {
	// ...
}


func (c *Client) authenticate(ctx context.Context) (string, error) {
	// ...
}


func (c *Client) invalidateToken(ctx context.Context) {
	// ...
}

