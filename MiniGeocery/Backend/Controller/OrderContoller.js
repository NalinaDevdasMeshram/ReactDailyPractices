import orderDetails from "../Models/order.js";
import orderService from "../Services/orderService.js";
const OrderController = async (req, res) => {
  try {
    const orderList = await orderService.placeOrder(req.body);
    return res.status(200).json({ message: orderList });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default OrderController;
