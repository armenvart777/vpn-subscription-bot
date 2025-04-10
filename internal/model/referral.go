package model

import "time"

type Referral struct {
	ID          int64     `db:"id"`
	ReferrerID  int64     `db:"referrer_id"`
	RefereeID   int64     `db:"referee_id"`
	BonusAmount int64     `db:"bonus_amount"`
	Credited    bool      `db:"credited"`
	CreatedAt   time.Time `db:"created_at"`
}
