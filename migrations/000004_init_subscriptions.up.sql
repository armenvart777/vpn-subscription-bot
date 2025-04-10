CREATE TABLE IF NOT EXISTS subscriptions (
    id                BIGSERIAL PRIMARY KEY,
    user_id           BIGINT NOT NULL REFERENCES users(id),
    plan_id           BIGINT NOT NULL REFERENCES plans(id),
    server_id         BIGINT NOT NULL REFERENCES servers(id),
    marzban_username  VARCHAR(255) NOT NULL,
    vless_link        TEXT NOT NULL DEFAULT '',
    status            VARCHAR(20) NOT NULL DEFAULT 'pending',
    start_date        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at        TIMESTAMPTZ NOT NULL,
    data_used_bytes   BIGINT NOT NULL DEFAULT 0,
    data_limit_bytes  BIGINT NOT NULL DEFAULT 0,
    auto_renew        BOOLEAN NOT NULL DEFAULT false,
    created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE INDEX idx_subscriptions_expires_at ON subscriptions(expires_at);
