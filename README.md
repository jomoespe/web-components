# Web-Components

This projects contains a set of projects relates to Web Components. The main goal is learning web components.


## How to run

If you have docker installed you can a Web server.

```
docker run -d \
    -v $PWD/html:/srv \
    -p 2015:2015 \
    abiosoft/caddy
```

or, if you are in Linux, you can simply execute ```./startserver``` script.

One the server is up and running you can access to [http://localhost:2015](http://localhost:2015) with your favourite browser. 


## Examples

### example1

This first example is a simple vanilla JS web component. 


## References

  - [Custom Elements](https://developers.google.com/web/fundamentals/architecture/building-components/customelements)
  - [Template tag in MDN](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/template)
