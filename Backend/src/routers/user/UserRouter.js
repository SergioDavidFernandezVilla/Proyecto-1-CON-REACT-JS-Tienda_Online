// Liberias
import express from "express";

const router = express.Router();

// Controllers
import { UserController } from "../../controllers/user/UserController.js";

// Ruta para obtener la página principal
router.get("/", (req, res) => {
  res.send("Página principal");
});

//Obtener un usuario
router.get("/get-user/:id", UserController.UserGetController);

//Crear un usuario
router.post("/register", UserController.UserRegisterController);

//Login
router.post("/login", UserController.LoginUserController);

//Logout
router.post("/logout", UserController.LogoutUserController);

//Verificar token
router.post("/verify-token", UserController.VerifyTokenController);

//Refrescar token
router.post("/refresh-token", UserController.RefreshTokenController);

export { router as UserRouter };