/*
 * This is the script for index.html page
 */
document.addEventListener("load", e => {
    const simple  = document.querySelector("#simple");
    const button  = document.querySelector("button");

    // registering to a web component custom event 
    simple.addEventListener('nameChanged', e => {
        console.log('nameChanged: attribute=', e.detail.attr,
                               ', old value=', e.detail.oldValue, 
                               ', new value=', e.detail.newValue)
    });
    
    button.addEventListener("click", e => {
        // using custom elements API 
        //simple.setAttribute("name", "Jose");
        // using the element API
        simple.name = "you";
        simple.doSomething("Something to be done")
    });
}, true);
