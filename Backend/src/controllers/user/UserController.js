//Models
import { UserModel } from "../../models/user/userModel.js";

//Validations
import { UserValidationRegister, UserValidationLogin, UserValidationGet } from "../../Validation/user/UserValidation.js";

//Utils password
import { hashPassword, comparePassword, hashPasswordConfirm } from "../../utils/passwordHash/passwordHash.js";

//JWT
import { generateToken, verifyToken } from "../../jwt/UserTokenJWT.js";

export const UserController = {

    // Obtener un usuario
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

    // Crear un usuario específico
    UserCreateController: async (req, res) => {
        const { email, password,confirmpassword, name, role } = req.body;

        const validation = UserValidationRegister(req.body);

        if (!validation.valid) {
            return res.status(400).json({ message: validation.message });
        }

        try {
            const passwordHash = await hashPassword(password, 10);
            const confirmPasswordHash = await hashPassword(confirmpassword, 10);
        
            const user = await UserModel.UserCreate(email, passwordHash, confirmPasswordHash, name, role);
            res.status(201).json({ message: "Se ha registrado correctamente", user: user });
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            res.status(500).json({ message: "Error del servidor" });
        }

    },

    // Crear un usuario pero register frontend
    UserRegisterController: async (req, res) => {
        const { email, password,confirmpassword, name } = req.body;

        const validation = UserValidationRegister(req.body);

        if (!validation.valid) {
            return res.status(400).json({ message: validation.message });
        }

        try {
            const passwordHash = await hashPassword(password, 10);
            const confirmPasswordHash = await hashPassword(confirmpassword, 10);
        
            const user = await UserModel.UserRegister(email, passwordHash, confirmPasswordHash, name);
            res.status(201).json({ message: "Se ha registrado correctamente", user: user });
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            res.status(500).json({ message: "Error del servidor" });
        }

    },

    // Login frontend
    LoginUserController: async (req, res) => {
        const { email, password } = req.body;
    
        const validation = UserValidationLogin(req.body);

        if (!validation.valid) {
            return res.status(400).json({ message: validation.message });
        }

        try {

            const user = await UserModel.UserLogin(email);

            if (!user) {
                return res.status(400).json({ message: "Correo o contraseña incorrectos" });
            }

            const IsPasswordCorrect = await comparePassword(password, user.password);
            if (!IsPasswordCorrect) {
                return res.status(400).json({ message: "Correo o contraseña incorrectos" });
            }

            const token = generateToken(user);

            const cookieOptions = {
                httpyOnly: true,
                secure: true,
                maxAge: 1000 * 60 * 60 * 24 * 7,
                sameSite: "strict",
                path: "/",
                domain: "localhost",
                maxAge: 24 * 60 * 60 * 1000 // 1 día de duración
            }

            // Establecer la cookie en la respuesta
            res.cookie('token', token, cookieOptions);

            res.status(200).json({message: "Login exitoso",
                token: token,
                user: user
            });
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            res.status(500).json({ message: "Error del servidor" });
        }
    },

    // Verificar token frontend
    VerifyTokenController: async (req, res) => {
        const token = req.headers.authorization.split(" ")[1];

        if (!token || token === "") {
            return res.status(401).json({
                message: "No se ha proporcionado un token de autenticación"
            });
        }

        try {
            const decoded = verifyToken(token);

            if (!decoded) {
                return res.status(401).json({
                    message: "No se ha proporcionado un token de autenticación válido"
                });
            }

            const user = await UserModel.UserGet(decoded.id);

            if (!user) {
                return res.status(401).json({
                    message: "No existe el usuario con ese token"
                });
            }

            res.status(200).json({
                message: "Token verificado correctamente",
                user: user
            });
        } catch (error) {
            console.error("Error al verificar el token:", error);
            res.status(500).json({ message: "Error del servidor" });
        }
    },

    // Refrescar token frontend
    RefreshTokenController: async (req, res) => {
        const token = req.headers.authorization.split(" ")[1];

        if (!token || token === "") {
            return res.status(401).json({
                message: "No se ha proporcionado un token de autenticación"
            });
        }

        try {
            const decoded = verifyToken(token);

            if (!decoded) {
                return res.status(401).json({
                    message: "No proporcionó un token de autenticación válido o ha caducado"
                });
            }

            const user = await UserModel.UserGet(decoded.id);

            if (!user) {
                return res.status(401).json({
                    message: "No existe el usuario con ese token"
                });
            }

            const tokenNew = generateToken(user);

            const cookieOptions = {
                httpyOnly: true,
                secure: true,
                maxAge: 1000 * 60 * 60 * 24 * 7,
                sameSite: "strict",
                path: "/",
                domain: "localhost",
                maxAge: 24 * 60 * 60 * 1000 // 1 día de duración
            }

            // Establecer la cookie en la respuesta
            res.cookie('token', tokenNew, cookieOptions);

            res.status(200).json({
                message: "Token actualizado correctamente",
                token: tokenNew,
                user: user
            });
        } catch (error) {
            console.error("Error al actualizar el token:", error);
            res.status(500).json({ message: "Error del servidor" });
        }
    },

    // Logout frontend
    LogoutUserController: async (req, res) => {
        res.send("Cerrar sesión");
    }
}

