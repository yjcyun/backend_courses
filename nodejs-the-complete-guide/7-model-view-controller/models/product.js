const fs = require('fs');
const path = require('path');

const Cart = require('./cart');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, price, description) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    getProductsFromFile((products) => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          (prod) => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    });
  }

  static deleteById(id) {
    getProductsFromFile((products) => {
      const product = products.find((prod) => prod.id === id);
      const updatedProducts = products.filter((prod) => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};

/*
saveMyVersion() {
  fs.readFile(p, (err, fileContent) => {
    let products = [];
    if (err) {
      products = [];
    } else {
      products = JSON.parse(fileContent);
    }

    products.push(this);
    fs.writeFile(p, JSON.stringify(products), (err) => {
      console.log(err);
    });
  });
}


saveOriginal() {
  fs.readFile(p, (err, fileContent) => {
    // need to read file first to see if the data file(products.json) exists
    let products = [];
    if (!err) {
      // if it doesn't produce any error then it means the data exists
      products = JSON.parse(fileContent); // assign products array to the  parsed fileContent we receive
    }
    // if there's no items in products.json, fileContent === undefined, so
    // we push the item we received from /controllers/products into the products array
    products.push(this);

    // we then write file in p directory, the stringified products array.
    // should we get any error, console log it
    fs.writeFile(p, JSON.stringify(products), (err) => {
      console.log(err);
    });
  });
}

 static fetchAllCB(cb) {
    // this cb is expecting an argument
    fs.readFile(p, (err, fileContent) => {
      // if there's error reading the file(ex. file products.json doesn't exist), then call cb with a param of []
      //  res.render('shop', {
      // prods: [],
      // pageTitle: 'Shop',
      // path: '/',

      if (err) {
        cb([]);
      }

      // else we parse the fileContent (content in products.json) then pass it as an argument
      //  res.render('shop', {
      // prods: JSON.parse(fileContent), or [ {title: "Harry Potter"} ]
      // pageTitle: 'Shop',
      // path: '/',
      cb(JSON.parse(fileContent));
    });
  }

  // This function call fails because readFile is asynchronous and just returns without waiting for the result from readFile
  static fetchAllFail() {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return [];
      }

      return JSON.parse(fileContent);
    });
  }
};

*/
