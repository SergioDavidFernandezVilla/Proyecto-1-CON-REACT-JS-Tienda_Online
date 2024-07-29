export const ProductValidationRegister = (data) => {
    const { title, description, price, stock, category, marca } = data;

    if (!title || !description || !price || !stock || !category || !marca) {
        return {valid: false, message: "Datos obligatorios"};
    }
   

    return {valid: true, message: "Datos correctos"};
}

