export const ImageValidationRegister = (data) => {
    const { file } = data;
    
    if (!file) {
        return {valid: false, message: "No se ha proporcionado un archivo"};
    }
   
    if (file.size > 5 * 1024 * 1024) {
        return {valid: false, message: "El archivo subido excede el límite de tamaño de 5MB"};
    }
   
    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
        return {valid: false, message: "El archivo subido no es un archivo de imagen"};
    }

    return {valid: true, message: "Datos correctos"};
}