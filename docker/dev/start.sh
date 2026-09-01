#!/usr/bin/env bash

set -euo pipefail

sync_npm_dependencies() {
    local project_dir="$1"
    local lock_file="${project_dir}/package-lock.json"
    local stamp_file="${project_dir}/node_modules/.package-lock.sha256"
    local lock_hash

    lock_hash="$(sha256sum "${lock_file}" | cut -d ' ' -f 1)"

    if [[ ! -f "${stamp_file}" ]] || [[ "$(cat "${stamp_file}")" != "${lock_hash}" ]]; then
        echo "📦 Installing npm dependencies: ${project_dir}"
        npm --prefix "${project_dir}" ci
        printf '%s' "${lock_hash}" > "${stamp_file}"
    fi
}

echo "🚀 Preparing Saola development container..."

sync_npm_dependencies /workspace/builder
sync_npm_dependencies /workspace/client
sync_npm_dependencies /workspace/saola

# Always use the mounted builder source instead of a stale published package.
rm -rf /workspace/saola/node_modules/@saolabs/builder
ln -s /workspace/builder /workspace/saola/node_modules/@saolabs/builder

cd /workspace/saola

echo "📦 Syncing Composer dependencies..."
composer install --no-interaction --prefer-dist

mkdir -p \
    storage/framework/cache \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache

echo "👀 Starting Laravel, Vite, Saola compiler and client watchers..."
exec npm run dev:container
