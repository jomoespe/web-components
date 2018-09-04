/*
 * A simple custom element example.
 * 
 * A detailed explanation can be found on:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */
class SimpleCustomElement extends HTMLElement {
  static get observedAttributes() { return ['name']; }   // attributes monitord for changes?.

  /* ***********************************************************************
   *  Custom element reactions/Lifecycle hooks 
   * *********************************************************************** */

  // An instance of the element is created or upgraded. Useful for initializing state, 
  // settings up event listeners, or creating shadow dom. See the spec for restrictions 
  // on what you can do in the constructor. 
  constructor() { 
    super();    // super() must me called always first
    console.log("constructor()"); 
  }

  // Called every time the element is inserted into the DOM. Useful for running setup code, 
  // such as fetching resources or rendering. Generally, you should try to delay work until 
  // this time. 
  connectedCallback() { 
    console.log("connectedCallback()"); 
  }

  // Called every time the element is removed from the DOM. Useful for running clean up code. 
  disconnectedCallback() { 
    console.log("disconnectedCallback()"); 
  }

  // Called when an observed attribute has been added, removed, updated, or replaced. Also 
  // called for initial values when an element is created by the parser, or upgraded. Note: 
  // only attributes listed in the observedAttributes property will receive this callback. 
  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr == 'name') {
      this.textContent = `Hello, ${newVal}`;
    }
  }

  // The custom element has been moved into a new document (e.g. someone called document.adoptNode(el)). 
  adoptedCallback() {
    console.log("adoptedCallback()"); 
  }
}

// Define the new element. Now, once the JS is loaded, it can be used:
// <simple-custom-element name=[the-name]></simple-custom-element>
customElements.define('simple-custom-element', SimpleCustomElement);