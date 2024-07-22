import { UserModel } from "../../models/user/userModel.js";
import { UserValidationRegister, UserValidationLogin, UserValidationGet } from "../../Validation/user/UserValidation.js";

import { hashPassword, comparePassword } from "../../utils/passwordHash/passwordHash.js";

export const UserController = {

    UserGetController: async (req, res) => {
        const { id } = req.params;

        const validation = UserValidationGet({id});

        if (!validation.valid) {
            return res.status(400).json({ message: validation.message });
        }

        try {
            const result = await UserModel.UserGet(id);
            res.status(200).json({message: "Se ha obtenido correctamente", data: result});
        } catch (error) {
            console.error("Error al obtener el usuario:", error);
            res.status(500).json({ message: "Error del servidor" });
        }
    },

    UserRegisterController: async (req, res) => {
        const { email, password, name } = req.body;

        const validation = UserValidationRegister(req.body);

        if (!validation.valid) {
            return res.status(400).json({ message: validation.message });
        }

        try {
            const passwordHash = await hashPassword(password);
            const newUser = await UserModel.UserRegister(email, passwordHash, name);
            res.status(201).json({message: "Se ha registrado correctamente", user: newUser});
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            res.status(500).json({ message: "Error del servidor" });
        }

    },

    LoginUserController: async (req, res) => {
        const { email, password } = req.body;
    
        const validation = UserValidationLogin(req.body);

        if (!validation.valid) {
            return res.status(400).json({ message: validation.message });
        }

        try {

            const user = await UserModel.UserLogin(email);

            if (!user) {
                return res.status(400).json({ message: "Usuario o contraseña incorrectos" });
            }

            const IsPasswordCorrect = await comparePassword(password, user.password);
            if (!IsPasswordCorrect) {
                return res.status(400).json({ message: "Usuario o contraseña incorrectos" });
            }


            res.send({message: "Login exitoso", user: user});
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            res.status(500).json({ message: "Error del servidor" });
        }
    },

    LogoutUserController: async (req, res) => {
        res.send("Cerrar sesión");
    }
}

