import OrderController from "../Controller/OrderContoller.js";
import product from "../Models/product.js";
import order from "../Models/order.js";
const placeOrder = async ({ productId, quantity }) => {
  const Product = await product.findById(productId);
  if (!Product) throw new Error("product not found");
  if (Product.stock < quality) {
    throw new Error(`Only ${Product.stock} items are available in stock`);
  }

  Product.stock = Product.stock - quantity;
  await Product.save();

  const newOrder = await order.create({
    productid: productId,
    Quantity: quantity,
    totalprice: Product.price * quantity,
  });
  return newOrder;
};
export default { placeOrder };
