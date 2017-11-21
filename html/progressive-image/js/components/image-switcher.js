customElements.define('progressive-image', class extends HTMLElement {
    static get observedAttributes() { return ['preload', 'src']; }

    constructor() {
        super();
    }

    connectedCallback() {
        var preloadImage = this.createImage(100);
        if (this.getAttribute('preload')) {
            preloadImage.src = this.getAttribute('preload');
        }
        
        var image = this.createImage(0);
        image.src = this.getAttribute('src');
        image.onload = () => {
            preloadImage.style.opacity = 0;
            image.style.opacity = 100;
        }
        
        var holder = this.createHolder();

        var shadow = this.attachShadow({mode: 'open'});
        holder.appendChild(preloadImage);
        holder.appendChild(image);
        shadow.appendChild(holder);

        if(this.getAttribute("alt")) {
            image.alt = this.getAttribute("alt");
        } else {
            console.warn("No alt attribute for id %s", this.getAttribute('id'));
        }
    }

    createImage(opacity) {
        var image = new Image();
        image.style.position = 'absolute';
        image.style.left = 0;
        image.style.width = '100%';
        image.style.height = '100%';
        image.style.objectFit = 'scale-down';
        image.style.transition = 'opacity 1s ease-in-out';
        image.style.opacity = opacity;
        return image;
    }

    createHolder() {
        var holder = document.createElement('div');
        holder.style.position = 'relative';
        holder.style.width = '100%';
        holder.style.height = '100%';
        holder.style.margin = '0 auto';
        return holder;
    }
});
