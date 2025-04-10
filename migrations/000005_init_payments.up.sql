CREATE TABLE IF NOT EXISTS payments (
    id               BIGSERIAL PRIMARY KEY,
    user_id          BIGINT NOT NULL REFERENCES users(id),
    subscription_id  BIGINT REFERENCES subscriptions(id),
    plan_id          BIGINT NOT NULL REFERENCES plans(id),
    server_id        BIGINT NOT NULL REFERENCES servers(id),
    method           VARCHAR(20) NOT NULL,
    status           VARCHAR(20) NOT NULL DEFAULT 'pending',
    amount_rub       BIGINT NOT NULL,
    external_id      VARCHAR(255) NOT NULL DEFAULT '',
    idempotency_key  VARCHAR(255) UNIQUE NOT NULL,
    metadata         JSONB NOT NULL DEFAULT '{}',
    created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_payments_user_id ON payments(user_id);
CREATE INDEX idx_payments_external_id ON payments(external_id);
CREATE INDEX idx_payments_idempotency_key ON payments(idempotency_key);
CREATE INDEX idx_payments_status ON payments(status);
