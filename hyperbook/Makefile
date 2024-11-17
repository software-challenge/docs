all: build

dev: .hyperbook/node_modules
	npx --yes hyperbook dev

prod: bin/test-production.sh

serve: build
	caddy file-server --listen :8800 --browse --root .hyperbook/out
	xdg-open https://localhost:8800

.hyperbook/out: book public glossary
	npx --yes hyperbook build
build: .hyperbook/out

clean:
	rm -rf .hyperbook

.PHONY: clean
