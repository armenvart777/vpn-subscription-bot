CREATE TABLE IF NOT EXISTS plans (
    id             BIGSERIAL PRIMARY KEY,
    name           VARCHAR(255) NOT NULL,
    duration_days  INT NOT NULL,
    price_rub      BIGINT NOT NULL,
    price_stars    INT NOT NULL DEFAULT 0,
    price_usdt     VARCHAR(20) NOT NULL DEFAULT '0',
    data_limit_gb  BIGINT NOT NULL DEFAULT 0,
    device_limit   INT NOT NULL DEFAULT 3,
    active         BOOLEAN NOT NULL DEFAULT true
);

-- Default plans
INSERT INTO plans (name, duration_days, price_rub, price_stars, price_usdt, data_limit_gb, device_limit) VALUES
    ('1 month',   30,  24900,  50,  '2.99',  0, 3),
    ('3 months',  90,  59900, 120,  '6.99',  0, 3),
    ('6 months', 180,  99900, 200, '11.99',  0, 3),
    ('1 year',   365, 179900, 360, '19.99',  0, 3);
