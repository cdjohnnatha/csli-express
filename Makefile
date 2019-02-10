current_dir = $(shell pwd)

run:
	npm run dev

production:
	npm start
	
postgresdb:
	docker run -d --hostname postgresdb -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -v pg_data:/var/lib/postgresql/data postgres:9.6
