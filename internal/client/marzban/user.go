package marzban

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
)

func (c *Client) CreateUser(ctx context.Context, req CreateUserRequest) (*UserResponse, error) {
	// ...
}


func (c *Client) GetUser(ctx context.Context, username string) (*UserResponse, error) {
	// ...
}


func (c *Client) ModifyUser(ctx context.Context, username string, req ModifyUserRequest) (*UserResponse, error) {
	// ...
}


func (c *Client) DeleteUser(ctx context.Context, username string) error {
	// ...
}


func (c *Client) DisableUser(ctx context.Context, username string) error {
	// ...
}


func (c *Client) EnableUser(ctx context.Context, username string) error {
	// ...
}

