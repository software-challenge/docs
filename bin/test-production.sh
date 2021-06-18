#!/bin/sh

secret=$(LC_ALL=C tr -dc '[:alnum:]' < /dev/urandom | head -c32)
echo "Secret for testing is $secret"
docker build -t docs-server --build-arg GITHUB_SECRET="$secret" .
docker run --rm -p 80:80 docs-server
