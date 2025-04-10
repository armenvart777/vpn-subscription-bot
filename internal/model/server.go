package model

type Server struct {
	ID           int64  `db:"id"`
	Name         string `db:"name"`
	Country      string `db:"country"`
	CountryName  string `db:"country_name"`
	Flag         string `db:"flag"`
	MarzbanURL   string `db:"marzban_url"`
	MarzbanUser  string `db:"marzban_user"`
	MarzbanPass  string `db:"marzban_pass"`
	MaxUsers     int    `db:"max_users"`
	CurrentUsers int    `db:"current_users"`
	Active       bool   `db:"active"`
}
