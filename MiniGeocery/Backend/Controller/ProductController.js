import product from "../Models/product.js";
const ProductController = async (req, res) => {
  const productList = await product.insertMany([
    { name: "Rice", price: 60, stock: 50 },
    { name: "Wheat", price: 45, stock: 40 },
  ]);
  console.log(productList);
  try {
    const productList = await product.find();
    res.status(200).json({ message: productList });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default ProductController;
