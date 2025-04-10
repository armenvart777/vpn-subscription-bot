package model

import "time"

type Payment struct {
	ID             int64         `db:"id"`
	UserID         int64         `db:"user_id"`
	SubscriptionID *int64        `db:"subscription_id"`
	PlanID         int64         `db:"plan_id"`
	ServerID       int64         `db:"server_id"`
	Method         PaymentMethod `db:"method"`
	Status         PaymentStatus `db:"status"`
	AmountRUB      int64         `db:"amount_rub"`
	ExternalID     string        `db:"external_id"`
	IdempotencyKey string        `db:"idempotency_key"`
	Metadata       []byte        `db:"metadata"`
	CreatedAt      time.Time     `db:"created_at"`
	UpdatedAt      time.Time     `db:"updated_at"`
}
