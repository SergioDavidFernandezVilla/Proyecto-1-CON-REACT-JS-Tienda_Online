export const ProductValidationRegister = (data) => {
    const { title, description, price, stock} = data;

    if (!title || !description || !price) {
        return {valid: false, message: "Datos obligatorios"};
    }

    if (title.length > 100) {
        return {valid: false, message: "El título no puede tener más de 100 caracteres"};
    }

    if (description.length > 500) {
        return {valid: false, message: "La descripción no puede tener más de 500 caracteres"};
    }

    if (price < 0) {
        return {valid: false, message: "El precio no puede ser negativo"};
    }


    return {valid: true, message: "Datos correctos"};
}

