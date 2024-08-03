import { ImageValidationRegister } from "../../../Validation/image/ImageValidation.js";

export const ImageUploadController = {
    UploadImage: async (req, res) => {
        try {

            const { file } = req;

            if (!file) {
                return res.status(400).json({ message: "No se ha proporcionado un archivo" });
            }

            // Validación de datos adicionales si es necesario
            const validation = ImageValidationRegister(req);

            if (!validation.valid) {
                // Si la validación falla, puedes eliminar el archivo subido si es necesario
                return res.status(400).json({ message: validation.message });
            }

            res.status(201).json({ 
                message: "Se ha subido correctamente la imagen",
                filename: file.filename, // Devolver el nombre del archivo si es necesario
                path: file.path // También puedes devolver la ruta del archivo
            });
        } catch (error) {
            console.error("Error al subir la imagen:", error);
            res.status(500).json({ message: "Error del servidor" });
        }
    }
};
