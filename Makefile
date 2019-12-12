5run:
	@docker run --rm \
				-v $(shell pwd)/config/Caddyfile:/etc/Caddyfile:ro \
				-v $(shell pwd)/html:/srv:ro \
				-p 80:80 \
				abiosoft/caddy:latest