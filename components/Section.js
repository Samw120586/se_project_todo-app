class Section {
    constructor({ items, renderer, containerSelector}) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._items.array.forEach((item) => {
            renderer(item);
        });
    }

    addItem(element) {
        this._container.append();
        
    };
}

export default Section;