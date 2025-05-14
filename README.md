# vpn-subscription-bot

Telegram-бот для продажи VPN-подписок. Mini App для выбора тарифа, оплата через YooKassa и CryptoBot, автоматическая выдача ключей.

## Возможности

- Telegram Mini App для выбора и оплаты тарифа
- платежи: YooKassa (карты) + CryptoBot (крипта)
- автоматическая выдача VPN-ключей
- управление пулом серверов через Marzban API
- реферальная система
- автопродление подписок
- админ-панель: статистика, управление пользователями

## Архитектура

```
vpn-bot/
├── cmd/             # точка входа
├── internal/
│   ├── handler/     # Telegram-обработчики
│   ├── service/     # бизнес-логика
│   ├── repository/  # PostgreSQL-запросы
│   ├── client/      # внешние API (Marzban, платежи)
│   └── model/       # модели данных
├── migrations/      # SQL-миграции
├── miniapp/         # фронтенд Mini App
└── deploy/          # конфиги деплоя
```

## Стек

Go 1.21+, PostgreSQL, Redis, telebot/v3, YooKassa API, CryptoBot API, Marzban API

## Запуск

```
cp .env.example .env
go build -o bot ./cmd/...
./bot
```

## Лицензия

MIT

<!-- v2 -->

<!-- v3 -->

<!-- v4 -->

<!-- v5 -->

<!-- v6 -->
