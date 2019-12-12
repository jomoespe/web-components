/*
 * A simple custom element example
 * ===============================
 * 
 * Definition for <simple-custom-element> custom element. 
 * 
 * Attributes:
 *   - name: the name to be shown in salutation.
 * 
 * Functions:
 *   - doSomethig(msg): to send a message to console.
 * 
 * This component is built following the specifications:
 *   - Custom elements
 *   - Shadow DOM
 *   - Custom events 
 * 
 * Also is adding some accesible attributes using AOM, [Accesibility Object Model](https://github.com/wicg/aom)
 * 
 * A detailed explanation can be found about,
 *   - Custom elements: https://developers.google.com/web/fundamentals/web-components/customelements
 *   - Shadow DOM: https://developers.google.com/web/fundamentals/web-components/shadowdom
 *   - Custom Events: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
 *   - Accesibility Object Model:  https://robdodson.me/the-future-of-accessibility-for-custom-elements/
 */
class SimpleCustomElement extends HTMLElement {
  static get observedAttributes() { return ['name']; }   // attributes monitord for changes?.

  /* ***********************************************************************
   *  Custom element Lifecycle hooks/listeners
   * *********************************************************************** */

  // An instance of the element is created or upgraded. Useful for initializing state, 
  // settings up event listeners, or creating shadow dom. See the spec for restrictions 
  // on what you can do in the constructor. 
  constructor() { 
    super();    // super() must me called always first
    console.log("constructor()"); 

    // Attach a shadow root to <simple-custom-element>.
    this.attachShadow({mode: 'open'});

    //  create an 'h1' element and attach to shadow DOM 
    this.h1 = document.createElement('h1');
    this.h1.textContent = "Hello World"

    this.shadowRoot.appendChild(this.h1)
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

  // The custom element has been moved into a new document (e.g. someone called document.adoptNode(el)). 
  adoptedCallback() {
    console.log("adoptedCallback()"); 
  }
  
  // Called when an observed attribute has been added, removed, updated, or replaced. Also 
  // called for initial values when an element is created by the parser, or upgraded. Note: 
  // only attributes listed in the observedAttributes property will receive this callback. 
  attributeChangedCallback(attr, oldVal, newVal) {
    console.log("attributeChangedCallback", attr, oldVal, newVal)
    switch(attr) {
      case 'name':
        this.h1.textContent = `Hello ${newVal}`;

        // Fire a custom event. When the name attribute change a 'nameChanged' event will be fired
        var event = new CustomEvent('nameChanged', { detail: { attr: attr, 
                                                               oldValue: oldVal, 
                                                               newValue: newVal } });
        this.dispatchEvent(event)
        break;
    }
  }

  /* ***********************************************************************
   *  The component Javascript API
   * *********************************************************************** */

  // Accesors/mutators for component attributes
  set name(newVal) { this.setAttribute('name', newVal);  }
  get name() { return this.getAttribute('name'); }

  // Component API
  doSomething(msg) {
    console.log("doSomething:", msg);
  }
}

// Define the new element. Now, once the JS is loaded, it can be used:
// <simple-custom-element name=[the-name]></simple-custom-element>
customElements.define('simple-custom-element', SimpleCustomElement);