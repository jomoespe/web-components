/*
 * A basic Custom Element example
 * 
 * All callback methods (to handle custom element life-cycle) are:
 *   - constructor()
 *   - connectedCallback()
 *   - disconnectedCallback() {
 *   - attributeChangedCallback(attributeName, oldValue, newValue, namespace)
 *   - adoptedCallback(oldDocument, newDocument) 
 */
class XProduct extends HTMLElement {
    // Monitor the attributes for changes.
    static get observedAttributes() { return ['data-name', 'data-img', 'data-url']; }

    constructor() {
        super(); // Always call super first in constructor

        // Create a standard img element and set it's attributes.
        var img = document.createElement('img');
        img.className = 'product-img';
        img.width = '150';
        img.height = '150';
        // and add an event listener to the image.
        img.addEventListener('click', () => {
            window.location = this.getAttribute('data-url');
        });

        // Create a link to the product.
        var link = document.createElement('a');
        link.className = 'product-name';

        // Create a shadow root and add the image and link to the shadow root.
        var shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(img);
        shadow.appendChild(link);
    }

    connectedCallback() {
        console.log("XProduct connected");
    }

    disconnectedCallback() {
        console.log("XProduct disconnected");
    }

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
        console.log(`XProduct attributeChanged. attr=${attributeName}, oldValue=${oldValue}, newValue=${newValue}`);
        switch (attributeName) {
          case 'data-name': 
            this.shadowRoot.querySelector("img").alt = newValue;
            this.shadowRoot.querySelector("a").innerText = newValue;
            break;
          case 'data-img': 
            this.shadowRoot.querySelector("img").src = newValue;
            break;
          case 'data-url': 
            this.shadowRoot.querySelector("a").href = newValue;
            break;
        }        
    }
    
    adoptedCallback(oldDocument, newDocument) {
        console.log(`XProduct adopted. oldDocument=${oldDocument}, newDocument=${newDocument}`);
    }
}

// Define the new element
customElements.define('x-product', XProduct);