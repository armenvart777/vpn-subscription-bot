package model

type Plan struct {
	ID           int64  `db:"id"`
	Name         string `db:"name"`
	DurationDays int    `db:"duration_days"`
	PriceRUB     int64  `db:"price_rub"`
	PriceStars   int    `db:"price_stars"`
	PriceUSDT    string `db:"price_usdt"`
	DataLimitGB  int64  `db:"data_limit_gb"`
	DeviceLimit  int    `db:"device_limit"`
	Active       bool   `db:"active"`
}
