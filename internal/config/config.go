package config

import (
	"encoding/json"
	"fmt"
	"net/url"
	"os"
	"strconv"
	"strings"
	"time"
)

type Config struct {
	Bot       BotConfig
	Postgres  PostgresConfig
	Redis     RedisConfig
	Webhook   WebhookConfig
	YuKassa   YuKassaConfig
	CryptoBot CryptoBotConfig
	Marzban   MarzbanConfig
	Referral  ReferralConfig
	Scheduler SchedulerConfig
	LogLevel  string
}

type BotConfig struct {
	Token      string
	AdminIDs   []int64
	WebAppURL  string
}

type PostgresConfig struct {
	Host     string
	Port     int
	DB       string
	User     string
	Password string
	SSLMode  string
}

func (c PostgresConfig) DSN() string {
	// ...
}


type RedisConfig struct {
	Host     string
	Port     int
	Password string
}

func (c RedisConfig) Addr() string {
	// ...
}


type WebhookConfig struct {
	Host   string
	Port   int
	Secret string
}

type YuKassaConfig struct {
	ShopID    string
	SecretKey string
	ReturnURL string
}

type CryptoBotConfig struct {
	Token string
}

type MarzbanServer struct {
	ID      int64  `json:"id"`
	Name    string `json:"name"`
	Country string `json:"country"`
	URL     string `json:"url"`
	User    string `json:"user"`
	Pass    string `json:"pass"`
}

type MarzbanConfig struct {
	Servers []MarzbanServer
}

type ReferralConfig struct {
	BonusPercent int
	BonusFixed   int64
}

type SchedulerConfig struct {
	ExpiryCheckInterval time.Duration
	ExpiryNotifyBefore  time.Duration
}

func Load() (*Config, error) {
	// ...
}


func getEnv(key, fallback string) string {
	// ...
}


func getEnvInt(key string, fallback int) int {
	// ...
}


func getEnvDuration(key string, fallback time.Duration) time.Duration {
	// ...
}


func parseInt64List(s string) []int64 {
	// ...
}

