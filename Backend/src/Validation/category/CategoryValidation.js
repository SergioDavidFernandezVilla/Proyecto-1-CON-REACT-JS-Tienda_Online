export const CategoryValidationRegister = (data) => {
    const { name } = data;

    if (!name) {
        return {valid: false, message: "Nombre obligatorio"};
    }

    if (name.length > 50) {
        return {valid: false, message: "El nombre no puede tener más de 50 caracteres"};
    }
   
    return {valid: true, message: "Datos correctos"};
}