import express from "express";
import { PController } from "../dependencies";
export const ProductRoute = express.Router();

ProductRoute.post("/create-product",PController.createProduct.bind(PController));
ProductRoute.get("/view-products",PController.getProduct.bind(PController));

