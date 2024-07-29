import express from "express";

const router = express.Router();

import { ProductController } from "../../controllers/product/ProductController.js";
import { AuthorizationRoleMiddleware } from "../../middlewares/AuthorizationRoleMiddleware.js";


router.get("/get-products", AuthorizationRoleMiddleware, ProductController.GetProducts);
router.post("/create-product", AuthorizationRoleMiddleware, ProductController.CreateProduct);

export { router as ProductRouter };