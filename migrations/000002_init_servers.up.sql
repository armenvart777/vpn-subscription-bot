CREATE TABLE IF NOT EXISTS servers (
    id             BIGSERIAL PRIMARY KEY,
    name           VARCHAR(255) NOT NULL,
    country        VARCHAR(10) NOT NULL,
    country_name   VARCHAR(255) NOT NULL,
    flag           VARCHAR(10) NOT NULL DEFAULT '',
    marzban_url    VARCHAR(512) NOT NULL,
    marzban_user   VARCHAR(255) NOT NULL,
    marzban_pass   VARCHAR(512) NOT NULL,
    max_users      INT NOT NULL DEFAULT 50,
    current_users  INT NOT NULL DEFAULT 0,
    active         BOOLEAN NOT NULL DEFAULT true
);
