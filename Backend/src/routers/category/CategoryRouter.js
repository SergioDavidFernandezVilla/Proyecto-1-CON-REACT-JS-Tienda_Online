import express from "express";

const router = express.Router();

import { CategoryController } from "../../controllers/category/CategoryController.js";
import { AuthorizationRoleMiddleware } from "../../middlewares/AuthorizationRoleMiddleware.js";

router.get("/get-categories", AuthorizationRoleMiddleware, CategoryController.GetCategories);
router.post("/create-category", AuthorizationRoleMiddleware, CategoryController.CreateCategory);

export { router as CategoryRouter };