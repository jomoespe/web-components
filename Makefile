run:
	@docker run -v $(PWD)/html:/srv \
				-v $(PWD)/config/Caddyfile:/etc/Caddyfile \
	            -p 80:80 \
	            -p 443:443 \
				abiosoft/caddy:latest
