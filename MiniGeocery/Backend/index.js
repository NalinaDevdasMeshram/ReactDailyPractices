console.log("welcome to MiniGreocery");
import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/database.js";
import ProductRoute from "./Routes/ProductRoute.js";
import OrderRoute from "./Routes/OrderRoute.js";
const PORT = process.env.PORT;
const app = express();

// mongodb connection
connectDB();
app.use(express.json());

// Routes
app.use("/api/v1/productList", ProductRoute);
app.use("/api/v1/userOrder", OrderRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
