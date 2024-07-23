import { verifyToken } from '../jwt/UserTokenJWT.js';

export const AuthenticateMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: 'No se ha proporcionado un token de autenticación',
        });
    }

    try {
        const decoded = verifyToken(token);

        if (!decoded) {
            return res.status(401).json({
                message: 'No se ha proporcionado un token de autenticación válido',
            });
        }

        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            message: 'No se ha proporcionado un token de autenticación válido',
        });
    }
};