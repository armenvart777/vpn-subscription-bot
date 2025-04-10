package model

import "time"

type Subscription struct {
	ID              int64     `db:"id"`
	UserID          int64     `db:"user_id"`
	PlanID          int64     `db:"plan_id"`
	ServerID        int64     `db:"server_id"`
	MarzbanUsername string    `db:"marzban_username"`
	VLESSLink       string    `db:"vless_link"`
	Status          SubStatus `db:"status"`
	StartDate       time.Time `db:"start_date"`
	ExpiresAt       time.Time `db:"expires_at"`
	DataUsedBytes   int64     `db:"data_used_bytes"`
	DataLimitBytes  int64     `db:"data_limit_bytes"`
	AutoRenew       bool      `db:"auto_renew"`
	CreatedAt       time.Time `db:"created_at"`
	UpdatedAt       time.Time `db:"updated_at"`
}
