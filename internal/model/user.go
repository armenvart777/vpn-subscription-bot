package model

import "time"

type User struct {
	ID         int64     `db:"id"`
	TelegramID int64     `db:"telegram_id"`
	Username   string    `db:"username"`
	FirstName  string    `db:"first_name"`
	LastName   string    `db:"last_name"`
	Role       UserRole  `db:"role"`
	ReferrerID *int64    `db:"referrer_id"`
	RefCode    string    `db:"ref_code"`
	Balance    int64     `db:"balance"`
	CreatedAt  time.Time `db:"created_at"`
	UpdatedAt  time.Time `db:"updated_at"`
}
