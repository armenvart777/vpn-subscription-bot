.PHONY: build run docker-up docker-down migrate-up migrate-down tidy

build:
	go build -o bin/bot ./cmd/bot

run:
	go run ./cmd/bot

tidy:
	go mod tidy

docker-up:
	cd deploy && docker-compose up -d --build

docker-down:
	cd deploy && docker-compose down

migrate-up:
	migrate -path migrations -database "$(DATABASE_URL)" up

migrate-down:
	migrate -path migrations -database "$(DATABASE_URL)" down
