import express from "express";

const router = express.Router();

import { ProductController } from "../../controllers/product/ProductController.js";
import { AuthorizationRoleMiddleware } from "../../middlewares/AuthorizationRoleMiddleware.js";


router.post("/product-created", AuthorizationRoleMiddleware, ProductController.CreateProduct);
router.get("/get-products", AuthorizationRoleMiddleware, ProductController.VerificarHealth);
export { router as ProductRouter };