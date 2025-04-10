package marzban

import "time"

type TokenResponse struct {
	AccessToken string `json:"access_token"`
	TokenType   string `json:"token_type"`
}

type CreateUserRequest struct {
	Username   string                            `json:"username"`
	Proxies    map[string]map[string]interface{} `json:"proxies"`
	Inbounds   map[string][]string               `json:"inbounds"`
	ExpireAt   int64                             `json:"expire"`
	DataLimit  int64                             `json:"data_limit"`
	Status     string                            `json:"status"`
	Note       string                            `json:"note,omitempty"`
}

type UserResponse struct {
	Username       string            `json:"username"`
	Status         string            `json:"status"`
	UsedTraffic    int64             `json:"used_traffic"`
	DataLimit      int64             `json:"data_limit"`
	Expire         int64             `json:"expire"`
	CreatedAt      time.Time         `json:"created_at"`
	Links          []string          `json:"links"`
	SubscriptionURL string           `json:"subscription_url"`
	Proxies        map[string]interface{} `json:"proxies"`
	Inbounds       map[string][]string    `json:"inbounds"`
}

type ModifyUserRequest struct {
	Status    string `json:"status,omitempty"`
	ExpireAt  int64  `json:"expire,omitempty"`
	DataLimit int64  `json:"data_limit,omitempty"`
	Note      string `json:"note,omitempty"`
}
