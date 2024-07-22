import { UserModel } from "../../models/user/userModel.js";
import { UserValidationRegister, UserValidationLogin } from "../../Validation/user/UserValidation.js";


export const UserController = {

    UserGetController: async (req, res) => {
        res.send("Obtener usuario");
    },

    UserRegisterController: async (req, res) => {
        const { email, password, name } = req.body;

        const validation = UserValidationRegister({email, password, name});

        if (!validation.valid) {
            return res.status(400).json({ message: validation.message });
        }

        try {
            const result = await UserModel.UserRegister(email, password, name);
            res.status(201).json({message: "Se ha registrado correctamente"});
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            res.status(500).json({ message: "Error del servidor" });
        }

    },

    LoginUserController: async (req, res) => {
        res.send("Login exitoso");
    },

    LogoutUserController: async (req, res) => {
        res.send("Cerrar sesión");
    }
}

