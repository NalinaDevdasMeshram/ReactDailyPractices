import express from "express";
const router = express.Router();
import ProductController from "../Controller/ProductController.js";

router.get("/products", ProductController);

export default router;
