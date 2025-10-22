class Section {
    constructor({ items, renderer, containerSelector}) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._items.array.forEach((item) => {
            renderer(this._item);
        });
    }

    addItem(element) {
        this._container.append(element);
        
    };
}

export default Section;