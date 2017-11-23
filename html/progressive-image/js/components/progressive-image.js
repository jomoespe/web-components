customElements.define('progressive-image', class extends HTMLElement {
    static get observedAttributes() { return ['preload', 'src']; }

    constructor() { super(); }

    connectedCallback() {
        this.preload = this.createPreload();
        this.image   = this.createImage();
        this.holder  = this.createHolder();
        this.holder.appendChild(this.preload);
        this.holder.appendChild(this.image);
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(this.holder);
    }

    showImage() {
        this.preload.style.opacity = 0;
        this.image.style.opacity = 100;
    }

    createPreload() {
        var image = this.createBaseImage();
        image.style.opacity = '100';
        image.src = this.getAttribute('preload');
        image.style.visibility = this.hasAttribute('preload') ? 'visible' : 'hidden';
        return image;
    }

    createImage() {
        var image = this.createBaseImage();
        image.style.opacity = 0;
        image.src = this.getAttribute('src');
        image.alt = this.getAttribute("alt");
        image.onload = () => this.showImage();
        return image;
    }

    createBaseImage() {
        var image = new Image();
        image.style.position = 'absolute';
        image.style.left = 0;
        image.style.width = '100%';
        image.style.height = '100%';
        image.style.objectFit = 'scale-down';
        image.style.transition = 'opacity 1s ease-in-out';
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
