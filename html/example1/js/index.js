/*
 * This is the script for index.html page
 */
document.addEventListener("DOMContentLoaded", e => {
	const title = document.querySelector("#titlePanel");
    // registering to a web component custom event 
    title.addEventListener('attributeChanged', event => {
        console.log('attributeChanged: attribute=[', event.detail.attr, '], old value=[', event.detail.oldValue, "], new value=[", event.detail.newValue, "]")
    });

    document.querySelector("button").addEventListener("click", e => {
        title.title = "Your orders";
        title.subtitle = "Here you can see your orders, current orders state, etc";
        title.image = "images/teaser-order.png";
    });
}, true);
    