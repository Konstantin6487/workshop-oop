install: install-deps

run:
	npx babel-node src/index.js

install-deps:
	npm install

build:
	npm run build

lint:
	npx eslint src/

test:
	npm run test
