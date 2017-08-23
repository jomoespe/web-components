# Web-Components

This projects contains a set of projects relates to Web Components. The main goal is learning web components.


## How to run

If you have docker installed you can a Web server.

``` bash
docker run -d \
    -v $PWD/html:/srv \
    -p 2015:2015 \
    abiosoft/caddy
```

or, if you are in Linux, you can simply execute ```./startserver``` script.

One the server is up and running you can access to [http://localhost:2015](http://localhost:2015) with your favourite browser. 


## Examples

All the examples are organized in project subdirectories.

### example1 - a simple title panel 

This first example is a simple vanilla JS web component.

This component is a title panel composed of a title a subtitle and an image.

``` html
<!-- importing the component -->
<link rel=import href=title-panel.html>

<!-- using the component -->
<title-panel id=myTitlePanel
        title="The title" 
        subtitle="The subtitle"
        image=the-image.png></title-panel>
```

Also this component have an API to interact with it.

const title = document.querySelector("#titlePanel");

``` javascript

titlePanel = document.querySelector("#myTitlePanel");

console.log("The title is " + titlePanel.title)

titlePanel.title = "New title";
titlePanel.subtitle = "New subtitle";
titlePanel.image = "path/to/new-image.png";
```


## References

  - [Custom Elements](https://developers.google.com/web/fundamentals/architecture/building-components/customelements)
  - [Template tag in MDN](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/template)
