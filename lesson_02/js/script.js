// Класс элемента корзины товаров
class CartItem {
  constructor(title, price, img, link) {
    this.title = title // Название товара
    this.price = price // Стоимость товара
    this.img = img // Картинка товара
    this.link = link // Cсылка на страницу товара
  }

  render() {}
}

// Класс корзины товаров
class Cart {
  constructor() {
    // Массивы с добавленными товарами
    this.addGoods = []
    this.removeGoods = []
  }

  addCart() {
    /*
    Добавляет товар в корзину
     */
  }

  removeCart() {
    /*
    Удаляет товар из корзины
    */
  }

  calcCart() {
    /*
    Считает стоимость и количество товаров в корзине
     */
  }

  //
  isOrder() {
    /*
    Определяет добавление товаров в корзину и при наличии активирует кнопку "Оформить заказ"
    */
  }
}

class ProductList {
  #goods

  constructor(container = '.products') {
    this.container = container
    this.#goods = []
    this._allProducts = []

    this._fetchGoods()
    this.#render()

    console.log(this.sum())
  }

  _fetchGoods() {
    this.#goods = [
      { title: 'Mango People T-shirt', price: 2000 },
      { title: 'Mango People T-shirt', price: 1500 },
      { title: 'Mango People T-shirt', price: 5000 },
      { title: 'Mango People T-shirt', price: 4500 },
      { title: 'Mango People T-shirt', price: 2000 },
      { title: 'Mango People T-shirt', price: 1500 },
      { title: 'Mango People T-shirt', price: 5000 },
      { title: 'Mango People T-shirt', price: 4500 },

      /*
      Не могу понять, почему не видит путь до картинок,
      поэтому оставил как выше

      {
        title: 'Mango People T-shirt',
        price: 150,
        img: 'img/product1.jpg'
    },
    {
        title: 'Mango People T-shirt',
        price: 250,
        img: 'img/product2.jpg'
    },
    {
        title: 'Mango People T-shirt',
        price: 350,
        img: 'img/product3.jpg'
    },
    {
        title: 'Mango People T-shirt',
        price: 450,
        img: 'img/product4.jpg'
    },
    {
        title: 'Mango People T-shirt',
        price: 550,
        img: 'img/product5.jpg'
    },
    {
        title: 'Mango People T-shirt',
        price: 650,
        img: 'img/product6.jpg'
    },
    {
        title: 'Mango People T-shirt',
        price: 750,
        img: 'img/product7.jpg'
    },
    {
        title: 'Mango People T-shirt',
        price: 850,
        img: 'img/product8.jpg'
    }
    */
    ]
  }

  sum() {
    return this.#goods.reduce((sum, { price }) => sum + price, 0)
  }

  #render() {
    const block = document.querySelector(this.container)

    for (let product of this.#goods) {
      const productObject = new ProductItem(product)
      this._allProducts.push(productObject)
      block.insertAdjacentHTML('beforeend', productObject.getGoodHTML())
    }
  }
}

class ProductItem {
  constructor(product, img = 'img/product1.jpg') /*Пришлось указать только 1 товар */ {
    this.title = product.title
    this.price = product.price
    this.id = product.id
    this.img = img
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

const list = new ProductList()
