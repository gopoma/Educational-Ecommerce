const ProductModel = require("../models/product");
const { stripeSecretKey } = require("../config");
const stripe = require("stripe")(stripeSecretKey);

class ProductService {
  async getAll() {
    const products = await ProductModel.find();
    return products;
  }

  async create(data) {
    const product = await ProductModel.create(data);
    return product;
  }
}

module.exports = ProductService;