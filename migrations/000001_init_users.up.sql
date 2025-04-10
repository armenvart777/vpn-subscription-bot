CREATE TABLE IF NOT EXISTS users (
    id            BIGSERIAL PRIMARY KEY,
    telegram_id   BIGINT UNIQUE NOT NULL,
    username      VARCHAR(255) NOT NULL DEFAULT '',
    first_name    VARCHAR(255) NOT NULL DEFAULT '',
    last_name     VARCHAR(255) NOT NULL DEFAULT '',
    role          VARCHAR(20) NOT NULL DEFAULT 'user',
    referrer_id   BIGINT REFERENCES users(id) ON DELETE SET NULL,
    ref_code      VARCHAR(32) UNIQUE NOT NULL,
    balance       BIGINT NOT NULL DEFAULT 0,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_telegram_id ON users(telegram_id);
CREATE INDEX idx_users_ref_code ON users(ref_code);
