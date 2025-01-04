const Product = require("../models/Product");

const resolvers = {
  Query: {
    products: async () => {
      try {
        const products = await Product.find({});
        if (products.length === 0) throw new Error("Products not found");
        return products;
      } catch (error) {
        throw new Error(error.message);
      }
    },

    product: async (_, { id }) => {
      try {
        const product = await Product.findById(id);
        if (!product) throw new Error("Product not found");
        return product;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },

  Mutation: {
    createProduct: async (_, args) => {
      try {
        const newProduct = new Product(args);
        return await newProduct.save();
      } catch (error) {
        throw new Error(`Error creating product: ${error.message}`);
      }
    },

    deleteProduct: async (_, { id }) => {
      try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) throw new Error("Product not found");
        return deletedProduct;
      } catch (error) {
        throw new Error(`Error deleting product: ${error.message}`);
      }
    },

    updateProduct: async (_, { id, ...updatedFields }) => {
      try {
        const updatedProduct = await Product.findByIdAndUpdate(
          id,
          updatedFields,
          { new: true }
        );
        if (!updatedProduct) throw new Error("Product not found");
        return updatedProduct;
      } catch (error) {
        throw new Error(`Error updating product: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
