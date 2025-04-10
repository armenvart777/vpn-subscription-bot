package model

type SubStatus string

const (
	SubStatusActive   SubStatus = "active"
	SubStatusExpired  SubStatus = "expired"
	SubStatusCanceled SubStatus = "canceled"
	SubStatusPending  SubStatus = "pending"
)

type PaymentStatus string

const (
	PaymentStatusPending   PaymentStatus = "pending"
	PaymentStatusSucceeded PaymentStatus = "succeeded"
	PaymentStatusCanceled  PaymentStatus = "canceled"
	PaymentStatusRefunded  PaymentStatus = "refunded"
)

type PaymentMethod string

const (
	PaymentMethodYuKassa   PaymentMethod = "yukassa"
	PaymentMethodStars     PaymentMethod = "stars"
	PaymentMethodCryptoBot PaymentMethod = "cryptobot"
)

type UserRole string

const (
	UserRoleUser  UserRole = "user"
	UserRoleAdmin UserRole = "admin"
)
