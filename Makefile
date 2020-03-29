all: install
	yarn gatsby build

clean: install
	yarn gatsby clean

develop: install
	yarn gatsby develop

format: install
	yarn prettier --write .

install:
	yarn install

serve: install
	yarn gatsby serve
