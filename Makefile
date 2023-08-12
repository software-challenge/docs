all: build

hyperbook/.hyperbook/node_modules: hyperbook/hyperbook.json
	npx --yes hyperbook@latest setup
setup: hyperbook/.hyperbook/node_modules

dev: setup
	npx --yes hyperbook dev

prod: bin/test-production.sh

serve: build
	caddy file-server --listen :8800 --browse --root hyperbook/.hyperbook/out
	xdg-open https://localhost:8800

hyperbook/.hyperbook/out: setup hyperbook/hyperbook.json hyperbook/book hyperbook/public hyperbook/glossary
	npx --yes hyperbook build
build: hyperbook/.hyperbook/out

clean:
	rm -rf .hyperbook
