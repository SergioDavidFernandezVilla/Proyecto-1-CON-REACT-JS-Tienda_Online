import jwt from 'jsonwebtoken';

// Importamos el archivo de variables de entorno
import { SECRET} from "../utils/secret.js"
import dotenv from 'dotenv';
dotenv.config();

// Creamos una variable para almacenar la clave secreta
const secretKey = SECRET;


// Función para generar un token
export const generateToken = (user) => {
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    };

    return jwt.sign(payload, secretKey, {
        expiresIn: '4h', // Expira en 4 horas para probar
    });
};

// Función para verificar el token
export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (err) {
        return null;
    }
};