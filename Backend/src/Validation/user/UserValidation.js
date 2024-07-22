export const UserValidationRegister = (data) => {
    const { email, password, name } = data;

    if (!email || !password || !name) {
        return {valid: false, message: "Son campos obligatorios"};
    }
    return {valid: true, message: "Datos correctos"};
}

export const UserValidationLogin = (data) => {
    const { email, password } = data;

    

    if (!email || !password) {
        return {valid: false, message: "Campos obligatorios"};
    }

    return {valid: true, message: "Datos correctos"};
}

export const UserValidationGet = (data) => {
    const {id} = data;

   if (!id) {
        return {valid: false, message: "Campo obligatorio"};
    }

    return {valid: true, message: "Datos correctos"};
}