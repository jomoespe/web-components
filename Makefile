run:
	@docker run -v $(PWD)/html:/srv -p 2015:2015 abiosoft/caddy
