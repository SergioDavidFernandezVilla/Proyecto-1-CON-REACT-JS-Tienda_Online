export const ModaValidationRegister = (data) => {
    const { name, description } = data;

    if (!name || !description) {
        return {valid: false, message: "Los campos name y description son requeridos"};
    }

    if (name.length > 50) {
        return {valid: false, message: "El nombre no puede tener más de 50 caracteres"};
    }

    if (description.length > 500) {
        return {valid: false, message: "La descripción no puede tener más de 500 caracteres"};
    }
   
    return {valid: true, message: "Datos correctos"};
}