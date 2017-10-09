/*
 * This is the script for index.html page
 */
document.addEventListener("DOMContentLoaded", e => {
    const title  = document.querySelector("#titlePanel");
    const button1 = document.querySelector("#button-1");
    const button2 = document.querySelector("#button-2");
    // registering to a web component custom event 
    title.addEventListener('attributeChanged', event => {
        console.log('attributeChanged: attribute=', event.detail.attr,
                                   ', old value=', event.detail.oldValue, 
                                   ', new value=', event.detail.newValue)
    });
    button1.addEventListener("click", e => {
        title.title    = "Your orders";
        title.subtitle = "Here you can see your orders, current orders state, etc";
        title.image    = "images/teaser-order.png";
    });
    button2.addEventListener("click", e => {
        title.title    = "Other title";
        title.subtitle = "Here other title";
        title.image    = "images/title-image.png";
    });
}, true);
    