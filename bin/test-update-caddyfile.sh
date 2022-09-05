#!/bin/sh -e
docker cp Caddyfile socha-docs:/etc/caddy
docker exec socha-docs caddy reload --config /etc/caddy/Caddyfile
