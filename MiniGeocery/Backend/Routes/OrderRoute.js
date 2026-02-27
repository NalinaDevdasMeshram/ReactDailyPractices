import express from "express";
const router = express.Router();
import OrderController from "../Controller/OrderContoller.js";

router.post("/orders", OrderController);

export default router;
