CREATE TABLE IF NOT EXISTS referrals (
    id            BIGSERIAL PRIMARY KEY,
    referrer_id   BIGINT NOT NULL REFERENCES users(id),
    referee_id    BIGINT NOT NULL REFERENCES users(id),
    bonus_amount  BIGINT NOT NULL DEFAULT 0,
    credited      BOOLEAN NOT NULL DEFAULT false,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_referrals_referrer_id ON referrals(referrer_id);
CREATE UNIQUE INDEX idx_referrals_referee_id ON referrals(referee_id);
