export const ProductValidationRegister = (data) => {
    const { title, description, price, stock, category, marca } = data;

    if (!title || !description || !price || !stock || !marca) {
        return {valid: false, message: "Datos obligatorios"};
    }

    if (title.length > 100) {
        return {valid: false, message: "El título no puede tener más de 100 caracteres"};
    }

    if (description.length > 500) {
        return {valid: false, message: "La descripción no puede tener más de 500 caracteres"};
    }

    if (marca.length > 50) {
        return {valid: false, message: "La marca no puede tener más de 50 caracteres"};
    }

    return {valid: true, message: "Datos correctos"};
}

