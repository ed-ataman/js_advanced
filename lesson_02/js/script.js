class ProductList {
    #goods;
  
    constructor(container = '.products') {
      this.container = container;
      this.#goods = [];
      this._allProducts = [];
  
      this._fetchGoods();
      this.#render();

      console.log(this.sum());
}
  
    _fetchGoods() {
      this.#goods = [
        {title: 'Mango People T-shirt', price: 2000},
        {title: 'Mango People T-shirt', price: 1500},
        {title: 'Mango People T-shirt', price: 5000},
        {title: 'Mango People T-shirt', price: 4500},
        {title: 'Mango People T-shirt', price: 2000},
        {title: 'Mango People T-shirt', price: 1500},
        {title: 'Mango People T-shirt', price: 5000},
        {title: 'Mango People T-shirt', price: 4500},
      ];
    }

    sum() {
        return this.#goods.reduce((sum, { price }) => sum + price, 0)
      }
  
    #render() {
      const block = document.querySelector(this.container);
  
      for (let product of this.#goods) {
        const productObject = new ProductItem(product);
  
        this._allProducts.push(productObject);
  
        block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
      }
    }
  }
  
  class ProductItem {
    constructor(product, img = "img/product1.jpg",) {
      this.title = product.title;
      this.price = product.price;
      this.id = product.id;
      this.img = img;
    }
  
    getGoodHTML() {
        return `<div class="product-box container">
        <div class="product-item">
            <a href="#"><img class="product__img" src="${this.img}" alt="product" /></a>
            <div class="product__feature">
                <a href="#" class="product__name">${this.title}</a>
                <p class="product__price">\u0024${this.price}</p>
            </div>
            <a href="#" class="product__add buy-btn"><i class="fas fa-shopping-cart"></i> Add to Cart
            </a>
        </div>
    </div>`
    }
  }
  
  const list = new ProductList();
  
