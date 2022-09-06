#!/bin/sh -ex
root="$(dirname $0)/.."

(
cd "$root/hyperbook"
npx hyperbook setup
npx hyperbook build
)

secret=$(LC_ALL=C tr -dc '[:alnum:]' < /dev/urandom | head -c32)
echo "Secret for testing is $secret"
docker build -t docs-server --build-arg GITHUB_SECRET="$secret" "$root"
test "$1" = "--watch" &&
	echo "$root/Caddyfile" | entr bin/test-update-caddyfile.sh &
docker run --rm -p 80:80 --name socha-docs docs-server
