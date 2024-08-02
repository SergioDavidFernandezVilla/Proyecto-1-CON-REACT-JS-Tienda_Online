import { verifyToken } from '../jwt/UserTokenJWT.js';

import { UserModel } from "../models/user/userModel.js";

export const AuthorizationRoleMiddleware = async(req, res, next) => {
    // Obtener el token de la solicitud
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

        // Obtener el rol del usuario
        const user = await UserModel.UserGet(decoded.id);

        if (!user) {
            return res.status(401).json({
                message: "No existe el usuario con ese token"
            });
        }

        if (user.role === process.env.ROLE_ADMIN) {
            return next();
        }

        return res.status(401).json({
            message: "No tienes permisos para acceder a esta ruta"
        });
    } catch (error) {
        console.error("Error al verificar el token:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};