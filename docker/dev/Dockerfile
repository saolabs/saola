FROM node:22-bookworm-slim AS node_runtime

FROM composer:2 AS composer_runtime

FROM php:8.4-cli-bookworm

COPY --from=node_runtime /usr/local/ /usr/local/
COPY --from=composer_runtime /usr/bin/composer /usr/bin/composer

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        curl \
        git \
        libonig-dev \
        libpq-dev \
        libxml2-dev \
        libzip-dev \
        unzip \
    && docker-php-ext-install dom mbstring pdo_pgsql pcntl xml xmlwriter zip \
    && pecl install redis \
    && docker-php-ext-enable redis \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace/saola

CMD ["bash", "/workspace/saola/docker/dev/start.sh"]
