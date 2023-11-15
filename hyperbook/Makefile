all: build

setup .hyperbook/node_modules: hyperbook.json
	npx --yes hyperbook@latest setup

dev: .hyperbook/node_modules
	npx --yes hyperbook dev

prod: bin/test-production.sh

serve: build
	caddy file-server --listen :8800 --browse --root .hyperbook/out
	xdg-open https://localhost:8800

.hyperbook/out: setup book public glossary
	npx --yes hyperbook build
build: .hyperbook/out

clean:
	rm -rf .hyperbook

.PHONY: clean setup
