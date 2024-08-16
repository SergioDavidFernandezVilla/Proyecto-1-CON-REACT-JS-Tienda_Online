import express from "express";

const router = express.Router();

import { ProductController } from "../../controllers/product/ProductController.js";
import { AuthorizationRoleMiddleware } from "../../middlewares/AuthorizationRoleMiddleware.js";


router.get("/get-products", AuthorizationRoleMiddleware, ProductController.createProduct);
router.post("/add-image-product", AuthorizationRoleMiddleware, ProductController.addImageToProduct);

export { router as ProductRouter };